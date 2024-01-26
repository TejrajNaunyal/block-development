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
export default function save(props) {
	const colors = {
		orange: '#fbd400',
		grey: '#ccc',
	  };
	const{ attributes } = props;
	const{ rating } = attributes;
	return (

			<div className="star-rating">
				{Array.from({ length: 5 }, (_, index) => (
				<span
					key={index}
					className={`star ${index < rating ? 'filled' : ''}`}
					style={{
					color: index < rating ? colors.black : colors.grey,
					marginRight: 10,
					}}
				>&#x2605;</span>
				))}
			</div>

	);
}
