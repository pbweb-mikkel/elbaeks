registerBlockType( 'myplugin/container', {
    title: __( 'My Plugin Container', 'myplugin' ),
    icon: 'universal-access-alt',
    category: 'myplugin',
    getEditWrapperProps: function () {
        return {
            "data-align": "full"
        };
    },
    edit: ({ attributes, setAttributes }) => {
        return (
            <div className={ props.className }>
                <InnerBlocks />
            </div>
        );
    },
    save: ({ attributes }) => {
        return (
            <div>
                <InnerBlocks.Content />
            </div>
        );
    },
} );