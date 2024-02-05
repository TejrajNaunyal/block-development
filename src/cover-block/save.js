/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save() }>
			<div
				className="cover-block"
				style={{
					backgroundImage: `url('${attributes.backgroundImage}')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					position: 'relative',
					minHeight: '200px',
				}}
			>
				<div
					className="overlay"
					style={{
						backgroundColor: attributes.overlayColor,
						position: 'absolute',
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
					}}
				></div>

				<p
					style={{
						color: '#fff',
						textAlign: 'center',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				>
					{attributes.buttonText}
				</p>
			</div>
		</div>
	);
}
