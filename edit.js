import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { Fragment } from '@wordpress/element';

const Edit = ({ attributes, setAttributes }) => {
    const { selectedIcon } = attributes;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const iconOptions = [
        { value: 'icon1', label: 'Icon 1' },
		{ value: 'icon2', label: 'Icon 2' },
		{ value: 'icon2', label: 'Icon 2' },
		{ value: 'icon2', label: 'Icon 2' },
		{ value: 'icon3', label: 'Icon 3' },
		{ value: 'icon2', label: 'Icon 2' },
		{ value: 'icon2', label: 'Icon 2' },
		{ value: 'icon2', label: 'Icon 2' },
		{ value: 'icon2', label: 'Icon 2' },
        
    ];
	
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSelectIcon = (value) => {
        setAttributes({ selectedIcon: value });
        toggleModal();
    };

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title={__('Icon Settings', 'text-domain')}>
                    <SelectControl
                        label={__('Select Icon', 'text-domain')}
                        value={selectedIcon}
                        options={iconOptions}
                        onChange={(value) => setAttributes({ selectedIcon: value })}
                        onFocus={toggleModal}
                    />
                </PanelBody>
            </InspectorControls>
            <div className="selected-icon">
                <p>{selectedIcon}</p>
            </div>
            {isModalOpen && (
                <Modal
                    title={__('Select Icon', 'text-domain')}
                    onRequestClose={toggleModal}
                >
                    <div>
                        {iconOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleSelectIcon(option.value)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </Modal>
            )}
        </Fragment>
    );
};

export default Edit;
