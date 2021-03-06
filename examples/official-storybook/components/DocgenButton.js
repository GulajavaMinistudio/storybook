import React from 'react';
import PropTypes from 'prop-types';

/**
 * DocgenButton component description imported from comments inside the component file,
 *
 * *Important Note*: Unlike with normal `<input>` elements, setting this will
 * not validate the input contents. This is because in this project we use
 * Formik and Yup to validate fields at the form-level, not at the individual
 * input level. It is still very important to set this value properly for
 * accessibility and user experience.
 *
 * Here's a list to test out formatting.
 *
 *  * `"number"` Any number not represented by a more specific type.
 *  * `"password"` A password.
 *  * `"email"` An email address.
 *  * `"tel"` A phone or fax number. Shows the phone number keypad on
 *      mobile keyboards.
 *
 * Here is a test for code blocks
 *
 * ```jsx
 * const Foo = () => (
 *  <div>foo</div>
 * );
 * ```
 */
export const DocgenButton = ({ disabled, label, onClick }) => (
  <button type="button" disabled={disabled} onClick={onClick}>
    {label}
  </button>
);

DocgenButton.defaultProps = {
  disabled: false,
  onClick: () => {},
  optionalString: 'Default String',
  one: { key: 1 },
  two: {
    thing: {
      id: 2,
      func: () => {},
      arr: [],
    },
  },
  obj: {
    key: 'value',
  },
  shape: {
    id: 3,
    func: () => {},
    arr: [],
    shape: {
      shape: {
        foo: 'bar',
      },
    },
  },
  arrayOf: [1, 2, 3],
  msg: new Set(),
  enm: 'News',
  enmEval: 'Photos',
  union: 'hello',
};

/* eslint-disable react/no-unused-prop-types */

DocgenButton.propTypes = {
  /** Boolean indicating whether the button should render as disabled */
  disabled: PropTypes.bool,
  /** button label. */
  label: PropTypes.string.isRequired,
  /** onClick handler */
  onClick: PropTypes.func,
  /**
   *  A simple `objectOf` propType.
   */
  one: PropTypes.objectOf(PropTypes.number),
  /**
   *  A very complex `objectOf` propType.
   */
  two: PropTypes.objectOf(
    PropTypes.shape({
      /**
       *  Just an internal propType for a shape.
       *  It's also required, and as you can see it supports multi-line comments!
       */
      id: PropTypes.number.isRequired,
      /**
       *  A simple non-required function
       */
      func: PropTypes.func,
      /**
       * An `arrayOf` shape
       */
      arr: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * 5-level deep propType definition and still works.
           */
          index: PropTypes.number.isRequired,
        })
      ),
    })
  ),

  /**
   * Plain object propType (use shape!!)
   */
  obj: PropTypes.object, // eslint-disable-line react/forbid-prop-types

  /**
   * propType for shape with nested arrayOf
   *
   * Also, multi-line description
   */
  shape: PropTypes.shape({
    /**
     *  Just an internal propType for a shape.
     *  It's also required, and as you can see it supports multi-line comments!
     */
    id: PropTypes.number.isRequired,
    /**
     *  A simple non-required function
     */
    func: PropTypes.func,
    /**
     * An `arrayOf` shape
     */
    arr: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * 5-level deep propType definition and still works.
         */
        index: PropTypes.number.isRequired,
      })
    ),

    shape: PropTypes.shape({
      shape: PropTypes.shape({
        foo: PropTypes.string,
      }),
    }),
  }),

  /**
   * array of a certain type
   */
  arrayOf: PropTypes.arrayOf(PropTypes.number),

  /**
   * `instanceOf` is also supported and the custom type will be shown instead of `instanceOf`
   */
  msg: PropTypes.instanceOf(Set),
  /**
   * `oneOf` is basically an Enum which is also supported but can be pretty big.
   *
   * Testing a list:
   *
   *  - `News` first
   *  - `Photos` second
   */
  enm: PropTypes.oneOf(['News', 'Photos']),
  enmEval: PropTypes.oneOf((() => ['News', 'Photos'])()),
  /**
   *  A multi-type prop is also valid and is displayed as `Union<String|Message>`
   */
  union: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Set)]),
  /**
   * test string with a comment that has
   * two identical lines
   * two identical lines
   */
  optionalString: PropTypes.string,
};
