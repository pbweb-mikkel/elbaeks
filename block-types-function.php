<?php 

    /* ACF */

    add_action('acf/init', 'my_acf_init_block_types');
    function my_acf_init_block_types() {

        if( function_exists('acf_register_block_type') ) {

            acf_register_block_type(
                array(
                    'name'              => 'home-hero',
                    'title'             => __('Homepage hero'),
                    'description'       => __('A custom homepage hero block'),
                    'render_template'   => 'template-parts/blocks/homepage-hero-block.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'format-video',
                    'keywords'          => array( 'homepage', 'hero' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );
            acf_register_block_type(
                array(
                    'name'              => 'kobertkartotek',
                    'title'             => __('Køberkartotek'),
                    'description'       => __('A custom køberkartotek form'),
                    'render_template'   => 'template-parts/blocks/kobertkartotek-form.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'text-page',
                    'keywords'          => array( 'kobertkartotek', 'form', 'submit' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );

            acf_register_block_type(
                array(
                    'name'              => 'skuffesalg',
                    'title'             => __('Skuffesalg block'),
                    'description'       => __('A custom skuffesalg block with form'),
                    'render_template'   => 'template-parts/blocks/skuffesalg-block.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'email-alt2',
                    'keywords'          => array( 'skuffesalg', 'form', 'sale' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );

            acf_register_block_type(
                array(
                    'name'              => 'kontakt',
                    'title'             => __('Kontakt list block'),
                    'description'       => __('A list of contacts'),
                    'render_template'   => 'template-parts/blocks/kontakt-list.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'id',
                    'keywords'          => array( 'kontakt', 'contact', 'persons' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );

            acf_register_block_type(
                array(
                    'name'              => 'post-preview',
                    'title'             => __('Post preview'),
                    'description'       => __('A post preview block'),
                    'render_template'   => 'template-parts/blocks/post-preview-block.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'index-card',
                    'keywords'          => array( 'post', 'preview', 'artikle' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );

            acf_register_block_type(
                array(
                    'name'              => 'categories-preview',
                    'title'             => __('Categories preview'),
                    'description'       => __('A categories preview block'),
                    'render_template'   => 'template-parts/blocks/categories-preview-block.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'admin-multisite',
                    'keywords'          => array( 'categories', 'preview', 'category' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );

            acf_register_block_type(
                array(
                    'name'              => 'page-preview',
                    'title'             => __('Page preview / Vurdering'),
                    'description'       => __('A page preview block'),
                    'render_template'   => 'template-parts/blocks/page-preview-block.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'analytics',
                    'keywords'          => array( 'page', 'preview', 'book', 'vurdering' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );

            acf_register_block_type(
                array(
                    'name'              => 'two-column-text',
                    'title'             => __('Two column text'),
                    'description'       => __('A custom block for text'),
                    'render_template'   => 'template-parts/blocks/two-column-block.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'columns',
                    'keywords'          => array( 'two', 'column', 'text' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );

            acf_register_block_type(
                array(
                    'name'              => 'about-us',
                    'title'             => __('About us block'),
                    'description'       => __('A custom about us block'),
                    'render_template'   => 'template-parts/blocks/about-us-block.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'welcome-widgets-menus',
                    'keywords'          => array( 'about', 'two', 'column', 'om' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );

            acf_register_block_type(
                array(
                    'name'              => 'image-text',
                    'title'             => __('Text block with image'),
                    'description'       => __('A custom block with text and image'),
                    'render_template'   => 'template-parts/blocks/image-text-block.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'table-col-before',
                    'keywords'          => array( 'image', 'text', 'people' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );

            acf_register_block_type(
                array(
                    'name'              => 'blog-block',
                    'title'             => __('Blog block'),
                    'description'       => __('A custom block with text and image'),
                    'render_template'   => 'template-parts/blocks/blog-block.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'welcome-write-blog',
                    'keywords'          => array( 'blog', 'posts' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );

            acf_register_block_type(
                array(
                    'name'              => 'available-properties',
                    'title'             => __('Ejendomme til salg'),
                    'description'       => __('A custom block for available properties'),
                    'render_template'   => 'template-parts/blocks/available-properties.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'admin-home',
                    'keywords'          => array( 'Ejendomme til', 'salg', 'available', 'properties' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );

            acf_register_block_type(
                array(
                    'name'              => 'sold-properties',
                    'title'             => __('Solgte ejendomme'),
                    'description'       => __('A custom block for sold properties'),
                    'render_template'   => 'template-parts/blocks/sold-properties.php',
                    'category'          => 'elbaeks-blocks',
                    'icon'              => 'admin-home',
                    'keywords'          => array( 'sold', 'solgte', 'ejendomme' ),
                    'mode'              => 'auto',
                    'supports'          => array(
                        'anchor' => true
                    )
                )
            );

        }
    }
    
?>