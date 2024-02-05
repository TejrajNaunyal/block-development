
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
  const colors = {
    red: '#f00',
    white: '#fff',
    blue: '#00f',
  };

  const { rating } = attributes;

  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : ''}`}
          style={{
            color: index < rating ? colors.red : colors.blue,
            marginRight: 10,
          }}
        >
          &#x2605;
        </span>
      ))}
    </div>
  );
}
