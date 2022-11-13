import cn from 'classnames';
import React from 'react';
import { withTranslation } from 'react-i18next';
import hoistStatics from 'hoist-non-react-statics';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.taste = props.taste;
    this.portions = props.portions;
    this.gift = props.gift;
    this.otherText = props.otherText;
    this.weight = props.weight;
    this.weightUnit = props.weightUnit;
    this.baseTitle = 'Сказочное заморское явство';
    this.SelectedTitle = 'Котэ не одобряет?';
    this.emtyUnderText = `Печалька, ${this.taste} закончился.`;
    this.selectetUnderText = props.selectetUnderText;
    this.state = {
      isInStock: typeof props.isInStock === 'boolean' ? props.isInStock : true,
      isSelected: false,
      isExitSelected: false,
      isEnterSelected: false,
    };
    this.swithSelected = this.swithSelected.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.MouseOutHandler = this.MouseOutHandler.bind(this);
    this.MouseEnterHandler = this.MouseEnterHandler.bind(this);
    this.baseUnderText = (
      <>
        Чего сидишь? Порадуй котэ,&nbsp;
        <span className="cart__underText_link" onClick={this.swithSelected}>купи</span>
        <span className="cart__underText_blue">.</span>
      </>
    );
  }

  static getCountToTranslate(num) {
    if (num >= 20) { return Number(num.toString().slice(-1)); }
    return num;
  }

  swithSelected() {
    const { isSelected } = this.state;
    if (isSelected) {
      this.setState({ isExitSelected: false });
      this.setState({ isEnterSelected: false });
    }
    this.setState({ isSelected: !isSelected });
  }

  MouseOutHandler() {
    const { isSelected } = this.state;
    if (isSelected) {
      this.setState({ isExitSelected: true });
    }
    this.setState({ isEnterSelected: false });
  }

  MouseEnterHandler() {
    const { isExitSelected } = this.state;
    if (isExitSelected) {
      this.setState({ isEnterSelected: true });
    }
  }

  clickHandler() {
    const { isInStock } = this.state;
    if (isInStock) {
      this.swithSelected();
    }
  }

  render() {
    const { isInStock, isSelected, isEnterSelected } = this.state;
    const { t } = this.props;
    const underline = () => {
      if (isInStock) {
        if (isSelected) { return this.selectetUnderText; }
        return this.baseUnderText;
      }
      return this.emtyUnderText;
    };
    const title = isEnterSelected ? this.SelectedTitle : this.baseTitle;
    const countPortions = Cart.getCountToTranslate(this.portions);
    const countMouse = Cart.getCountToTranslate(this.gift);
    const portions = this.portions === 1 ? '' : this.portions;
    const mouse = this.gift === 1 ? '' : this.gift;
    return (
      <div
        className="cartConteiner"
        onMouseLeave={this.MouseOutHandler}
        onMouseEnter={this.MouseEnterHandler}
      >
        <div onClick={this.clickHandler} className={cn('cart', { cursor_not: !isInStock })}>
          <div className={cn('cart__back', { cart__back_selected: isSelected }, { cart__back_empty: !isInStock })} />
          <div className="cart__fill">
            <div className={cn('cart__img', { cart__elements_mist: !isInStock })} />
          </div>
          <div className="cart__title_conteiner">
            <p className={cn('cart__title', { cart__elements_mist: !isInStock }, { cart__elements_selectetColor: isEnterSelected })}>{title}</p>
          </div>
          <p className={cn('cart__subTitle', { cart__elements_mist: !isInStock })}>Нямушка</p>
          <p className={cn('cart__taste', { cart__elements_mist: !isInStock })}>{this.taste}</p>
          <p className={cn('cart__text', { cart__elements_mist: !isInStock })}>
            <span className="cart__text__count">{`${portions} `}</span>
            {t('portions_interval', { postProcess: 'interval', count: countPortions })}
          </p>
          <p className={cn('cart__text', { cart__elements_mist: !isInStock })}>
            <span className="cart__text__count">{`${mouse} `}</span>
            {t('mouse_interval', { postProcess: 'interval', count: countMouse })}
            в подарок
          </p>
          <p className={cn('cart__text', { cart__elements_mist: !isInStock })}>{this.otherText}</p>

          <div className={cn('cart__circle', { cart__circle_empty: !isInStock }, { cart__circle_selected: isSelected })}>
            <p className="cart__circle__weight">{this.weight}</p>
            <p className="cart__circle__weightUnit">{this.weightUnit}</p>
          </div>
        </div>
        <p className={cn('cart__underText', { cart__underText_empty: !isInStock })}>
          {underline()}
        </p>
      </div>
    );
  }
}
export default hoistStatics(withTranslation()(Cart), Cart);
