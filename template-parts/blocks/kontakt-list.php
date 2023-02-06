
<div class="kontaktListWrap">
	<div class="container">
		<div class="row row-cols-lg-3 row-cols-2">
			<?php if ( have_rows( 'people' ) ) : ?>
				<?php while ( have_rows( 'people' ) ) : the_row(); ?>
					<div class="col-12 singlePerson">
						<div class="singlePerson__image">
							<?php 
								printf(
									'<img  data-src="%s" class="lazyload" alt="%s" />',
									get_sub_field( 'image' )['sizes']['large'],
									get_sub_field( 'title' )
								);
							?>
						</div>
						<div class="singlePerson__name"><?php the_sub_field( 'name' ); ?></div>
						<div class="singlePerson__role"><?php the_sub_field( 'role' ); ?></div>
						<?php 
							if(get_sub_field( 'email_address' ))
								printf(
									'<a href="mailto:%s" target="_blank">%s %s</a>',
									get_sub_field( 'email_address' ),
                                    '<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z" transform="translate(0)"/></svg>',
									get_sub_field( 'email_address' )
								);
							if(get_sub_field( 'telephone_number' ))
								printf(
									'<a href="mailto:%s" target="_blank">%s %s</a>',
									get_sub_field( 'telephone_number' ),
                                    '<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M26,29h-.17C6.18,27.87,3.39,11.29,3,6.23A3,3,0,0,1,5.76,3h5.51a2,2,0,0,1,1.86,1.26L14.65,8a2,2,0,0,1-.44,2.16l-2.13,2.15a9.37,9.37,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,24,17.35l3.77,1.51A2,2,0,0,1,29,20.72V26A3,3,0,0,1,26,29ZM6,5A1,1,0,0,0,5,6v.08C5.46,12,8.41,26,25.94,27A1,1,0,0,0,27,26.06V20.72l-3.77-1.51-2.87,2.85L19.88,22C11.18,20.91,10,12.21,10,12.12l-.06-.48,2.84-2.87L11.28,5Z" transform="translate(0)"/></svg>',
									get_sub_field( 'telephone_number' )
								);
							if(get_sub_field( 'mobile_phone_number' ))
								printf(
									'<a href="mailto:%s" target="_blank">%s %s</a>',
									get_sub_field( 'mobile_phone_number' ),
									'<svg width="14px" height="22px" viewBox="0 0 14 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									        <g id="Kontakt-os" transform="translate(-328.000000, -818.000000)" fill="#9B7250">
									            <g id="Image" transform="translate(323.000000, 180.000000)">
									                <g id="Actions-/-Toggle-/-phone--filled-/-24-Copy-2" transform="translate(5.500000, 638.250000)">
									                    <path d="M11.375,0 L1.625,0 C0.727908575,0.000895748473 0.000895748473,0.727908575 0,1.625 L0,19.5 C0.00102981577,20.3970358 0.727964191,21.1239702 1.625,21.125 L11.375,21.125 C12.2719617,21.1237915 12.9987915,20.3969617 13,19.5 L13,1.625 C12.9989702,0.727964191 12.2720358,0.00102981577 11.375,0 L11.375,0 Z M11.375,1.625 L11.375,3.25 L1.625,3.25 L1.625,1.625 L11.375,1.625 Z M1.625,19.5 L1.625,4.875 L11.375,4.875 L11.375,19.5 L1.625,19.5 Z" id="Fill"></path>
									                </g>
									            </g>
									        </g>
									    </g>
									</svg>',
									get_sub_field( 'mobile_phone_number' )
								);
						?>
					</div>
				<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</div>
</div>	