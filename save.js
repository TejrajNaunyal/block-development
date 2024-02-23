import { __ } from '@wordpress/i18n';
import { Text } from '@wordpress/element';

const Save = ({ attributes }) => {
    const { selectedIcon } = attributes;

    return (
        <div>
            <Text content={__('Selected Icon:', 'text-domain')} />
            <span>{selectedIcon}</span>
            
        </div>
    );
};

export default Save;
