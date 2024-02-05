import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	RangeControl,
	TextControl,
	CheckboxControl,
	ColorPicker,
	FontSizePicker,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const onSelectImage = (media) => {
		setAttributes({ backgroundImage: media.url });
	};

	const calculateFontSize = () => {
		const baseFontSize = 15; // Adjust this value as needed for a larger font size
		const fontSizeWidth = (attributes.imageWidth * baseFontSize) / 100;
		const fontSizeHeight = (attributes.imageHeight * baseFontSize) / 400;
		const fontSize = Math.min(fontSizeWidth, fontSizeHeight);
		const colorFactor = (attributes.imageWidth + attributes.imageHeight) / 150; // Adjust this factor as needed
		const adjustedFontSize = fontSize * colorFactor;
		return `${adjustedFontSize}px`;
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__("Block Settings", "cover-block")}>
					<MediaUpload
						onSelect={onSelectImage}
						type="image"
						value={attributes.backgroundImage}
						render={({ open }) => (
							<Button onClick={open}>
								{__("Upload Image", "cover-block")}
							</Button>
						)}
					/>
					<RangeControl
						label={__("Image Width (%)", "cover-block")}
						value={attributes.imageWidth}
						onChange={(value) => setAttributes({ imageWidth: value })}
						min={50}
						max={100}
					/>
					<RangeControl
						label={__("Image Height (px)", "cover-block")}
						value={attributes.imageHeight}
						onChange={(value) => setAttributes({ imageHeight: value })}
						min={50}
						max={800}
					/>
					<RangeControl
						label={__("Image Opacity", "cover-block")}
						value={attributes.imageOpacity}
						onChange={(value) => setAttributes({ imageOpacity: value })}
						min={0}
						max={1}
						step={0.1}
					/>
					<TextControl
						label={__("Content Font", "cover-block")}
						value={attributes.contentFont}
						onChange={(value) => setAttributes({ contentFont: value })}
					/>
					<CheckboxControl
						label={__("Bold", "cover-block")}
						checked={attributes.isContentBold}
						onChange={(value) => setAttributes({ isContentBold: value })}
					/>
					
					<ColorPicker
						label={__("Content Color", "cover-block")}
						color={attributes.contentColor}
						onChange={(value) => setAttributes({ contentColor: value })}
					/>
					
				</PanelBody>
			</InspectorControls>

			<div
				className="cover-block"
				style={{
					backgroundImage: `url('${attributes.backgroundImage}')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					width: `${attributes.imageWidth}%`,
					height: `${attributes.imageHeight}px`,
					position: "relative",
					minHeight: "200px",
				}}
			>
				<div
					className="overlay"
					style={{
						backgroundColor: `rgba(0, 0, 0, ${attributes.imageOpacity})`,
						position: "absolute",
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
						width: "100%",
					}}
				></div>

				<RichText
					tagName="p"
					placeholder={__("Enter content...", "cover-block")}
					value={attributes.content}
					onChange={(value) => setAttributes({ content: value })}
					style={{
						color: attributes.contentColor,
						fontFamily: attributes.contentFont,
						fontSize: calculateFontSize(),
						fontWeight: attributes.isContentBold ? "bold" : "normal",
						textAlign: "center",
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				/>
			</div>
		</div>
	);
}
