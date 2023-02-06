<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package elbaeks
 */

?>

    <div class="elbaeksInsta">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="instaBlock">
                        <h3><?php the_field( 'title_footer_img', 'options' ); ?></h3>
                        <span class="instaBlock__name">
                            <svg width="27px" height="27px" viewBox="0 0 27 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <polygon id="path-1" points="0 0 26.0165 0 26.0165 26.0167 0 26.0167"></polygon>
                                </defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Frontpage" transform="translate(-820.000000, -3460.000000)">
                                        <g id="Instagram-Copy-2" transform="translate(0.000000, 3252.000000)">
                                            <g id="Icons-/-Instagram" transform="translate(820.000000, 208.000000)">
                                                <g id="Group-3">
                                                    <mask id="mask-2" fill="white">
                                                        <use xlink:href="#path-1"></use>
                                                    </mask>
                                                    <g id="Clip-2"></g>
                                                    <path d="M23.7085,18.837 C23.7085,21.523 21.5235,23.708 18.8375,23.708 L7.1795,23.708 C4.4935,23.708 2.3085,21.523 2.3085,18.837 L2.3085,7.18 C2.3085,4.494 4.4935,2.308 7.1795,2.308 L18.8365,2.308 C21.5225,2.308 23.7085,4.494 23.7085,7.18 L23.7085,18.837 Z M18.8365,0 L7.1795,0 C3.2205,0 -0.0005,3.221 -0.0005,7.18 L-0.0005,18.837 C-0.0005,22.796 3.2205,26.017 7.1795,26.017 L18.8365,26.017 C22.7955,26.017 26.0165,22.796 26.0165,18.837 L26.0165,7.18 C26.0165,3.221 22.7955,0 18.8365,0 L18.8365,0 Z" id="Fill-1" fill="#E4D5B9" mask="url(#mask-2)"></path>
                                                </g>
                                                <path d="M13.0083,17.4037 C10.5843,17.4037 8.6123,15.4317 8.6123,13.0087 C8.6123,10.5847 10.5843,8.6127 13.0083,8.6127 C15.4323,8.6127 17.4043,10.5847 17.4043,13.0087 C17.4043,15.4317 15.4323,17.4037 13.0083,17.4037 M13.0083,6.3047 C9.3113,6.3047 6.3043,9.3117 6.3043,13.0087 C6.3043,16.7047 9.3113,19.7117 13.0083,19.7117 C16.7053,19.7117 19.7123,16.7047 19.7123,13.0087 C19.7123,9.3117 16.7053,6.3047 13.0083,6.3047" id="Fill-4" fill="#E4D5B9"></path>
                                                <path d="M19.9933,4.3475 C19.5483,4.3475 19.1113,4.5275 18.7973,4.8435 C18.4823,5.1565 18.3003,5.5945 18.3003,6.0405 C18.3003,6.4855 18.4823,6.9225 18.7973,7.2375 C19.1113,7.5515 19.5483,7.7335 19.9933,7.7335 C20.4393,7.7335 20.8753,7.5515 21.1903,7.2375 C21.5063,6.9225 21.6863,6.4855 21.6863,6.0405 C21.6863,5.5945 21.5063,5.1565 21.1903,4.8435 C20.8763,4.5275 20.4393,4.3475 19.9933,4.3475" id="Fill-6" fill="#E4D5B9"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        @elbaeks_ejendomsmaegler
                        </span>
                        <?php if(get_field( 'images_footer', 'options'  )): ?>
                            <?php 
                                $arr = get_field( 'images_footer', 'options' );

                                $arr = array_filter($arr, function($v) {
                                    return isset($v['image']['ID']);
                                });
                                array_multisort($arr);
                                shuffle($arr);
                            ?>
                            <div class="splide instagramSlider">
                                <div class="splide__track">
                                    <ul class="splide__list">
                                        <?php 
                                            for ($i=0; $i < 4; $i++) {
                                                if(isset($arr[$i]['image'])){
                                                    printf(
                                                        '<li class="splide__slide"><img  data-src="%s" class="lazyload" alt="%s" /></li>',
                                                        $arr[$i]['image']['sizes']['large'],
                                                        $arr[$i]['image']['alt']
                                                    );
                                                }else{

                                                }
                                            }
                                        ?>
                                    </ul>
                                </div>
                            </div>
                        <?php endif; ?>
                        <div class="buttonCenter">
                            <?php 
                                if(get_field( 'instagram_link', 'options' )) 
                                printf(
                                    '<a href="%s" class="button button--green button--arrow" target="%s"><span>%s</span></a>',
                                    get_field( 'instagram_link', 'options' )['url'],
                                    get_field( 'instagram_link', 'options' )['target'],
                                    get_field( 'instagram_link', 'options' )['title']
                                ); 

                                if(get_field( 'facebook_link', 'options' )) 
                                printf(
                                    '<a href="%s" class="button button--green button--arrow" target="%s"><span>%s</span></a>',
                                    get_field( 'facebook_link', 'options' )['url'],
                                    get_field( 'facebook_link', 'options' )['target'],
                                    get_field( 'facebook_link', 'options' )['title']
                                ); 

                                if(get_field( 'linkedin_link', 'options' )) 
                                printf(
                                    '<a href="%s" class="button button--green button--arrow" target="%s"><span>%s</span></a>',
                                    get_field( 'linkedin_link', 'options' )['url'],
                                    get_field( 'linkedin_link', 'options' )['target'],
                                    get_field( 'linkedin_link', 'options' )['title']
                                );
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<footer id="footer" class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="footerBlock">
                        <div class="footerBlock__logo">
                            <?php echo file_get_contents('wp-content/themes/elbaeks/img/logo.svg'); ?>
                        </div>
                        <div class="footerBlock__info">
                            <p><?php the_field( 'information', 'options' ); ?></p>
                            <?php 
                                if(get_field( 'phone_number', 'options' ))
                                    printf('<div class="footerBlock__info__phone">%s<a href="tel:%s" target="_blank">%s</a></div>',
                                        '<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M26,29h-.17C6.18,27.87,3.39,11.29,3,6.23A3,3,0,0,1,5.76,3h5.51a2,2,0,0,1,1.86,1.26L14.65,8a2,2,0,0,1-.44,2.16l-2.13,2.15a9.37,9.37,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,24,17.35l3.77,1.51A2,2,0,0,1,29,20.72V26A3,3,0,0,1,26,29ZM6,5A1,1,0,0,0,5,6v.08C5.46,12,8.41,26,25.94,27A1,1,0,0,0,27,26.06V20.72l-3.77-1.51-2.87,2.85L19.88,22C11.18,20.91,10,12.21,10,12.12l-.06-.48,2.84-2.87L11.28,5Z" transform="translate(0)"/></svg>',
                                        get_field( 'phone_number', 'options' ),
                                        get_field( 'phone_number', 'options' )
                                    );
                                if(get_field( 'email_address', 'options' ))
                                    printf('<div class="footerBlock__info__mail">%s<a href="mailto:%s" target="_blank">%s</a></div>',
                                        '<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z" transform="translate(0)"/></svg>',
                                        get_field( 'email_address', 'options' ),
                                        get_field( 'email_address', 'options' )
                                    );
                            ?>
                        </div>
                    </div>
                    <div class="footerCookies">
                        <a href="<?php echo get_the_permalink(1371); ?>">Cookie- og privatlivspolitik</a>
                    </div>
                </div>
            </div>
        </div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
