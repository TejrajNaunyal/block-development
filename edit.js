import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, URLInputButton, MediaUpload, InspectorControls, ColorPalette, FontSizePicker } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

const Edit = ({ attributes, setAttributes }) => {
    const { contentTitle, titleColor, titleBgColor, titleFontSize, imageUrl, description, descriptionColor, descriptionBgColor, descriptionFontSize, learnMoreUrl, imageWidth } = attributes;

    const onChangeContentTitle = (newTitle) => {
        setAttributes({ contentTitle: newTitle });
    };

    const onChangeDescription = (newDescription) => {
        setAttributes({ description: newDescription });
    };

    const onSelectImage = (newImage) => {
        setAttributes({ imageUrl: newImage.url });
    };

    const onChangeLearnMoreUrl = (newUrl) => {
        setAttributes({ learnMoreUrl: newUrl });
    };

    const onChangeImageWidth = (newWidth) => {
        setAttributes({ imageWidth: newWidth });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Image Settings', 'destination-highlight')}>
                    <RangeControl
                    className='widthControler'
                        label={__('Image Width', 'destination-highlight')}
                        value={imageWidth}
                        onChange={onChangeImageWidth}
                        min={50}
                        max={500}
                        step={10}
                    />
                    <URLInputButton
                    className='Urlinsert'  
                    url={imageUrl}
                        onChange={(newUrl) => setAttributes({ imageUrl: newUrl })}
                    />
                </PanelBody>
                <PanelBody title={__('Title Settings', 'destination-highlight')}>
                    <FontSizePicker
                        className="fontsize"    
                        label={__('Font Size', 'destination-highlight')}
                        value={titleFontSize}
                        onChange={(newSize) => setAttributes({ titleFontSize: newSize })}
                    />
                    <ColorPalette
                        className="fontsize"
                        label={__('Text Color', 'destination-highlight')}
                        value={titleColor}
                        onChange={(newColor) => setAttributes({ titleColor: newColor })}
                    />
                    <ColorPalette
                        className="fontsize"
                        label={__('Background Color', 'destination-highlight')}
                        value={titleBgColor}
                        onChange={(newColor) => setAttributes({ titleBgColor: newColor })}
                    />
                </PanelBody>
                <PanelBody title={__('Description Settings', 'destination-highlight')}>
                    <FontSizePicker
                        className="fontsize"
                        label={__('Font Size', 'destination-highlight')}
                        value={descriptionFontSize}
                        onChange={(newSize) => setAttributes({ descriptionFontSize: newSize })}
                    />
                    <ColorPalette
                        className="fontsize"
                        label={__('Text Color', 'destination-highlight')}
                        value={descriptionColor}
                        onChange={(newColor) => setAttributes({ descriptionColor: newColor })}
                    />
                    <ColorPalette
                        className="fontsize"
                        label={__('Background Color', 'destination-highlight')}
                        value={descriptionBgColor}
                        onChange={(newColor) => setAttributes({ descriptionBgColor: newColor })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...useBlockProps()}>
                <div className="destination-highlight-block">
                    {/* Image Upload */}
                    <MediaUpload
                   
                        onSelect={onSelectImage}
                        render={({ open }) => (
                            <button onClick={open}>
                                {imageUrl ? (
                                    <img src={imageUrl} alt={__('Destination Image', 'destination-highlight')} style={{ width: imageWidth }} />
                                ) : (
                                    __('Upload Destination Image', 'destination-highlight')
                                )}
                            </button>
                        )}
                    />
                    <RichText
                        tagName="h2"
                        value={contentTitle}
                        onChange={onChangeContentTitle}
                        placeholder={__('Enter Content Title', 'destination-highlight')}
                        style={{
                            color: titleColor,
                            backgroundColor: titleBgColor,
                            fontSize: titleFontSize
                        }}
                    />
                    {/* Editable Description */}
                    <RichText
                        tagName="p"
                        value={description}
                        onChange={onChangeDescription}
                        placeholder={__('Enter Description', 'destination-highlight')}
                        style={{
                            color: descriptionColor,
                            backgroundColor: descriptionBgColor,
                            fontSize: descriptionFontSize
                        }}
                    />
                    {/* Learn More URL */}
                    <URLInputButton
                        url={learnMoreUrl}
                        onChange={onChangeLearnMoreUrl}
                    />
                </div>
            </div>
        </>
    );
};

export default Edit;
