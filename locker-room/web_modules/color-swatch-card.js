const SMALL_AA_RATIO = 4.5;
const BIG_AA_RATIO = 3.0;

/**
 * This method returns the luminance of a certain color, split by red, green and blue.
 *
 * @param {RGB} RGB - The color to return the luminance from
 * @returns {Number} The luminance of the color.
 */
function _getLuminance(color) {
    const { red, green, blue } = color;
    return (0.2126 * red) + (0.7152 * green) + (0.0722 * blue);
}

/**
 * RGB
 * 
 * @typedef {Object}  RGB
 * @property {number} red   - Red value
 * @property {number} green - Green value
 * @property {number} blue  - Blue value
 */

/**
 * Calculates the Standard Red Green Blue. 
 *
 * For more info: https://en.wikipedia.org/wiki/SRGB
 * 
 * @param {RGB} RGB - The color to return the srgb from
 * @returns {(undefined|RGB)} Undefined or an object with the Red, Green and Blue values
 */
function _calculateSRGB(rgb) {
    if (!rgb) {
        return undefined;
    }

    return Object.keys(rgb).reduce((sRGB, color) => {
        sRGB[color] = parseFloat((rgb[color] / 255), 10);
        return sRGB;
    }, { red: 0.0, green: 0.0, blue: 0.0 });
}

/**
 * Calculates the Luminance, Red, Green, Blue
 * 
 * For more info: https://en.wikipedia.org/wiki/LRGB
 *
 * @param {RGB} RGB - The color to return the lrgb from
 * @returns {(undefined|RGB)} undefined or an object with the Red, Green and Blue values
 */
function _calculateLRGB(rgb) {
    if (!rgb) {
        return undefined;
    }

    const sRGB = _calculateSRGB(rgb);

    return Object.keys(rgb).reduce((LRGB, color) => {
        const val = parseFloat(sRGB[color], 10);
        if (val <= 0.03928) {
            LRGB[color] = (val / 12.92);
            return LRGB;
        }

        LRGB[color] = Math.pow(((val + 0.055) / 1.055), 2.4);
        return LRGB;
    }, { red: 0, green: 0, blue: 0 });
}

/**
 * Transforms the color HEX in RGB
 *
 * @param {string} color - hex value
 * @returns {(undefined|RGB)} undefined or an object with the Red, Green and Blue values
 */
function _getRGBFromHex(color) {
    return color[0] === '#' ? {
        red: parseInt(color.slice(1, 3), 16),
        green: parseInt(color.slice(3, 5), 16),
        blue: parseInt(color.slice(5, 7), 16)
    } : undefined;
}

/**
 * Defines who's the lighter and who's the darker.
 * Calculates the ratio between de light and dark. 
 * 
 * Follows the rules of WCAG 2.0
 * 
 * Rules can be seen here: https://www.w3.org/TR/2008/REC-WCAG20-20081211/
 *
 * @param {number} LuminanceA - Luminance value of a color (background color expected)
 * @param {number} LuminanceB - Luminance value of a color (foreground color expected)
 * @returns {number} Contrast Ratio between two colors (expected to be background color and foreground color)
 */
function _getRatio(luminanceA, luminanceB) {
    const lighter = luminanceA > luminanceB ? luminanceA : luminanceB;
    const darker = luminanceA > luminanceB ? luminanceB : luminanceA;
    return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Transforms 3 Digit Hex in 6 Digit Hex
 * 
 * @param {string} color - hex value
 * @returns {string|undefined} - the six digit HEX or undefined
 */
function _threeDigitHexToSixDigitHex(color) {
    if (color.length !== 4) {
        return color;
    }

    if (color[0] !== '#') {
        return;
    }

    return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
}


/**
 * Transforms a 3 digit or 4 digit hex color
 * into a RGB value
 *
 * @param {string} color - 3 digit hex or 4 digit hex value
 * @returns {RGB} An object with the Red, Green and Blue values
 */
function normalizeColor(color) {
    if (color.length === 4) {
        return _getRGBFromHex(_threeDigitHexToSixDigitHex(color));
    }
    return _getRGBFromHex(color);
}

/**
 * Info
 * 
 * @typedef {Object}    info
 * @property {string}   color               - Color of the background
 * @property {boolean}  smallRatioPassed    - Indicates if the ratio is smaller than the SMALL_AA_RATIO
 * @property {boolean}  bigRatioPassed      - Indicates if the ratio is bigger than the BIG_AA_RATIO
 */

/**
 * Gets the info about Contrasts of the Background with all the colours
 * @param {string} background - 6 digit hex value 
 * @param {string} foreground - 6 digit hex value
 * @returns {info} object with info about the Contrasts
 */
function getRatioInfo(background, foreground) {
    const backgroundColor = _calculateLRGB(normalizeColor(background));
    const backgroundLuminance = _getLuminance(backgroundColor);
    const foregroundColor = _calculateLRGB(normalizeColor(foreground));
    const foregroundLuminance = _getLuminance(foregroundColor);
    const ratio = _getRatio(backgroundLuminance, foregroundLuminance);
    return {
        color: foreground,
        smallRatioPassed: ratio >= SMALL_AA_RATIO,
        bigRatioPassed: ratio >= BIG_AA_RATIO,
    }
}

class ColorSwatchCard extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const backgroundColor = this.getBackgroundColor();
    const mainForegroundColor = this.getForegroundColorMain();
    const secondaryForegroundColor = this.getForegroundColorSecondary();
    
    this.foregrounds = { 
      colorMain: getRatioInfo(backgroundColor, mainForegroundColor),
      colorSecondary: getRatioInfo(backgroundColor, secondaryForegroundColor)
    };
  }

  /**
   * Attributes of the custom element we 
   * actually want to observe changes upon
   * @returns {attribute}
   */
  static get observedAttributes() {
    return ['background-color', 'foreground-color-main', 'foreground-color-secondary', 'palette-name'];
  }

  /**
   * HTML to render the palette
   *
   * @returns {string} HTML of the element
   */
  getRenderTemplate() {
    return `
      <div class="color-swatch-card">
        <div class="color-swatch-card__top-section" style="background-color: ${this.getBackgroundColor()}">
          ${Object.values(this.foregrounds).map(foreground => `
            <div class="color-swatch-card__info color-swatch-card__info--small">
              <div class="color-swatch-card__text" style="color: ${foreground.color} ">A</div>
              <div class="color-swatch-card__validation">
                ${foreground.smallRatioPassed ? 'PASS' : 'FAIL'}
              </div>
            </div>
            <div class="color-swatch-card__info color-swatch-card__info--big">
              <div class="color-swatch-card__text" style="color: ${foreground.color}">A</div>
              <div class="color-swatch-card__validation">
                ${foreground.bigRatioPassed ? 'PASS' : 'FAIL'}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="color-swatch-card__bottom-section">
          <div class="color-swatch-card__color-name">  
            ${this.getPaletteName()}
          </div>
          <div class="color-swatch-card__hex-rgb-value">  
            Hex: ${this.getBackgroundColor()}
          </div>
          <div class="color-swatch-card__hex-rgb-value">  
            RGB: ${normalizeColor(this.getBackgroundColor()).red},${normalizeColor(this.getBackgroundColor()).green},${normalizeColor(this.getBackgroundColor()).blue} 
          </div>
        </div>
      </div>
    `
  }

  setBackgroundColor() {
    this.setAttribute('background-color', '#000000');
  }
  /**
   * CSS styles for the palette
   *
   * @returns {string} CSS of the element
   */
  getRenderStyle() {
    return `
      :host {
        display: inline-block;
      }
      
      * {
        border-box: box-sizing;
      }

      .color-swatch-card {
        display: flex;
        width: 245px;
        border-radius: 5px;
        flex-direction: column;
        flex-wrap: wrap;
      }

      .color-swatch-card__top-section {
        display: flex;
        border-radius: 5px 5px 0 0;
        width: 100%;
        height: 180px;
        justify-content: center;
        align-items: flex-end;
      }

      .color-swatch-card__info {
        padding: 0 4px;
        text-align: center;
        margin-bottom: 10px;
      }

      .color-swatch-card__info--small .color-swatch-card__text {
        font-size: small;
      }

      .color-swatch-card__info--big .color-swatch-card__text {
        font-size: large;
      }

      .color-swatch-card__validation {
        padding: 0 8px;
        border-radius: 4px;
        background-color: white;
        font-size: 13px;
      }

      .color-swatch-card__bottom-section {
        display: flex;
        flex-direction: column;
        border-radius: 0 0 5px 5px;
        background-color: #f6f6f6;
        display: flex;
        width: 100%;
        height: 100px;
        justify-content: center;
      }

      .color-swatch-card__color-name {
        margin-left: 20px;
        color: #000;
        font-weight: bold;
      }

      .color-swatch-card__hex-rgb-value {
        margin-left: 20px;
      }
    `
  }

  /**
   * Returns the value of the Attribute background-color
   *
   * @returns {attribute}
   */
  getBackgroundColor() {
    return this.getAttribute('background-color') || '#aaaaaa';
  }

  /**
   * Returns the value of the Attribute 'foreground-color-main'.
   * In case of being 'undefined', it's value changes to white
   * 
   * @returns {attribute}
   */
  getForegroundColorMain() {
    return this.getAttribute('foreground-color-main') || '#ffffff';
  }

  /**
   * Returns the value of the Attribute 'foreground-color-secondary'.
   * In case of being 'undefined', it's value changes to white
   *
   * @returns {attribute}
   */
  getForegroundColorSecondary() {
    return this.getAttribute('foreground-color-secondary') || '#000000';
  }

  /**
   * Returns the value of the Attribute 'palette-name'
   *
   * @returns {attribute}
   */
  getPaletteName() {
    return this.getAttribute('palette-name') || '$color-default';
  }

  /**
   * Responsible for the rendering of the page
   * 
   */
  render() {
    this.shadowRoot.innerHTML = `
    <style>${this.getRenderStyle()}</style>
    <root>${this.getRenderTemplate()}</root>
    `;
  }

  /**
   * Called every time the element is inserted into the DOM
   * 
   */
  connectedCallback() {
    this.render();
  }

  /**
   * In case one of the elements suffers any change, this callback
   * is called.
   * 
   * Receives the attribute, it's old value and the new value.
   * Calls the render
   * 
   */
  attributeChangedCallback(attrColor, oldVal, newVal) {
    if (oldVal) {
      this.shadowRoot.querySelector('root').innerHTML = this.getRenderTemplate();
    }
  }
}
customElements.define('color-swatch-card', ColorSwatchCard);

export default ColorSwatchCard;
