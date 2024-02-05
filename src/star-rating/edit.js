// Edit.js
import { __ } from '@wordpress/i18n';
import { RangeControl, ColorPalette } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  const colors = [
    { name: 'red', color: '#f00' },
    { name: 'white', color: '#fff' },
    { name: 'blue', color: '#00f' },
  ];

  const {
    rating,
    activeColor,
    deactiveColor,
    padding,
    margin,
    padding_top,
    padding_bottom,
    padding_left,
    padding_right,
    margin_top,
    margin_bottom,
    margin_left,
    margin_right,
  } = attributes;

  const handleRatingChange = (newRating) => {
    setAttributes({ rating: newRating });
  };

  const handleRatingActiveColorChange = (newActiveColor) => {
    setAttributes({ activeColor: newActiveColor });
  };

  const handleRatingDeactiveColorChange = (newDeactiveColor) => {
    setAttributes({ deactiveColor: newDeactiveColor });
  };

  const handlePaddingChange = (newPadding) => {
    setAttributes({ padding: newPadding });
  };

  const handleMarginChange = (newMargin) => {
    setAttributes({ margin: newMargin });
  };

  const handlePaddingTopChange = (newPaddingTop) => {
    setAttributes({ padding_top: newPaddingTop });
  };

  const handlePaddingBottomChange = (newPaddingBottom) => {
    setAttributes({ padding_bottom: newPaddingBottom });
  };

  const handlePaddingLeftChange = (newPaddingLeft) => {
    setAttributes({ padding_left: newPaddingLeft });
  };

  const handlePaddingRightChange = (newPaddingRight) => {
    setAttributes({ padding_right: newPaddingRight });
  };

  const handleMarginTopChange = (newMarginTop) => {
    setAttributes({ margin_top: newMarginTop });
  };

  const handleMarginBottomChange = (newMarginBottom) => {
    setAttributes({ margin_bottom: newMarginBottom });
  };

  const handleMarginLeftChange = (newMarginLeft) => {
    setAttributes({ margin_left: newMarginLeft });
  };

  const handleMarginRightChange = (newMarginRight) => {
    setAttributes({ margin_right: newMarginRight });
  };

  return (
    <div {...useBlockProps({ style: { padding, margin } })}>
      <InspectorControls className='inspector'>
        <RangeControl
          className='rangeControl'
          label={__('Rating', 'star-rating')}
          value={rating}
          onChange={handleRatingChange}
          min={1}
          max={5}
          step={1}
        />
        <div className='activeColor'>
          {__('Active Color', 'rating_plugin')}
        </div>
        <ColorPalette
          className='activeColorPalette'
          colors={colors.map((c) => c.color)}
          value={activeColor}
          onChange={handleRatingActiveColorChange}
        />

        <div className='activeColor'>
          {__('Deactive Color', 'rating_plugin')}
        </div>
        <ColorPalette
          className='activeColorPalette'
          colors={colors.map((c) => c.color)}
          value={deactiveColor}
          onChange={handleRatingDeactiveColorChange}
        />

        <div className='section'>
          <h2>{__('Padding', 'star-rating')}</h2>
          <RangeControl
            label={__('Overall Padding', 'star-rating') + ` (${padding}px)`}
            value={padding}
            onChange={handlePaddingChange}
            min={0}
            max={50}
            step={1}
          />
          <div className='paddingControls'>
            <RangeControl
              label={__('Top', 'star-rating') + ` (${padding_top}px)`}
              value={padding_top}
              onChange={handlePaddingTopChange}
              min={0}
              max={50}
              step={1}
            />
            <RangeControl
              label={__('Bottom', 'star-rating') + ` (${padding_bottom}px)`}
              value={padding_bottom}
              onChange={handlePaddingBottomChange}
              min={0}
              max={50}
              step={1}
            />
            <RangeControl
              label={__('Left', 'star-rating') + ` (${padding_left}px)`}
              value={padding_left}
              onChange={handlePaddingLeftChange}
              min={0}
              max={50}
              step={1}
            />
            <RangeControl
              label={__('Right', 'star-rating') + ` (${padding_right}px)`}
              value={padding_right}
              onChange={handlePaddingRightChange}
              min={0}
              max={50}
              step={1}
            />
          </div>
        </div>

        <div className='section'>
          <h2>{__('Margin', 'star-rating')}</h2>
          <RangeControl
            label={__('Margin', 'star-rating') + ` (${margin}px)`}
            value={margin}
            onChange={handleMarginChange}
            min={0}
            max={30}
            step={1}
          />
          <div className='marginControls'>
            <RangeControl
              label={__('Top', 'star-rating') + ` (${margin_top}px)`}
              value={margin_top}
              onChange={handleMarginTopChange}
              min={0}
              max={50}
              step={1}
            />
            <RangeControl
              label={__('Bottom', 'star-rating') + ` (${margin_bottom}px)`}
              value={margin_bottom}
              onChange={handleMarginBottomChange}
              min={0}
              max={50}
              step={1}
            />
            <RangeControl
              label={__('Left', 'star-rating') + ` (${margin_left}px)`}
              value={margin_left}
              onChange={handleMarginLeftChange}
              min={0}
              max={50}
              step={1}
            />
            <RangeControl
              label={__('Right', 'star-rating') + ` (${margin_right}px)`}
              value={margin_right}
              onChange={handleMarginRightChange}
              min={0}
              max={50}
              step={1}
            />
          </div>
        </div>

        {/* ... (other controls) */}
      </InspectorControls>

      <div className="star-rating">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={`star ${index < rating ? 'filled' : ''}`}
            style={{
              color: index < rating ? activeColor : deactiveColor,
              paddingRight: padding_right,
              paddingLeft: padding_left,
              paddingTop: padding_top,
              paddingBottom: padding_bottom,
              marginRight: margin_right,
              marginLeft: margin_left,
              marginTop: margin_top,
              marginBottom: margin_bottom,
            }}
          >&#x2605;</span>
        ))}
      </div>
    </div>
  );
}
