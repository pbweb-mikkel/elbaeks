<article id="bolig-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div id="stickHeader"></div>
	<div class="boligWrap" id="bolig">
		<?php get_template_part('template-parts/parts/bolig', 'hero'); ?>
		<div class="boligInfo">
			<div class="container">
				<div class="row">
					<div class="col-12 col-lg-6">
						<div class="boligContent">
                            <?php if(get_field('title')){ ?>
							    <h1><?php the_field( 'title' ); ?></h1>
                            <?php } ?>
							<div class="boligContent__text">
								<?php the_field( 'text' ); ?>
								<div class="buttonCenter hiddenText">
									<a href="#" class="readAllText"><span>Læs mere</span></a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-6">
						<div class="boligData">
							<div class="boligData__address"><?php the_field( 'address' ); ?></div>
							<div class="boligData__table">
								<?php if(get_field( 'boligtype' )): ?>
									<div class="boligData__table__single">
										<span>Boligtype:</span>
										<span><?php the_field( 'boligtype' ); ?></span>
									</div>
								<?php endif; ?>
								<?php if(get_field( 'bolig__kld__grund' )): ?>
									<div class="boligData__table__single">
										<span>Bolig / kld. / grund:</span>
										<span><?php the_field( 'bolig__kld__grund' ); ?></span>
									</div>
								<?php endif; ?>
                                <?php if(get_field( 'erhvervsareal' )): ?>
                                    <div class="boligData__table__single">
                                        <span>Erhvervsareal:</span>
                                        <span><?php the_field( 'erhvervsareal' ); ?></span>
                                    </div>
                                <?php endif; ?>
								<?php if(get_field( 'antal_rum' )): ?>
									<div class="boligData__table__single">
										<span>Antal rum:</span>
										<span><?php the_field( 'antal_rum' ); ?></span>
									</div>
								<?php endif; ?>
								<?php if(get_field( 'byggear' )): ?>
									<div class="boligData__table__single">
										<span>Byggeår:</span>
										<span><?php the_field( 'byggear' ); ?></span>
									</div>
								<?php endif; ?>
								<?php if(get_field( 'kontant' )): ?>
									<div class="boligData__table__single">
										<span>Kontant:</span>
										<span><?php the_field( 'kontant' ); ?></span>
									</div>
								<?php endif; ?>
								<?php if(get_field( 'ejerudgift_pr_md' )): ?>
									<div class="boligData__table__single">
										<span>Ejerudgift pr. md:</span>
										<span><?php the_field( 'ejerudgift_pr_md' ); ?></span>
									</div>
								<?php endif; ?>
								<?php if(get_field( 'sagsnummer' )): ?>
									<div class="boligData__table__single">
										<span>Sagsnummer:</span>
										<span><?php the_field( 'sagsnummer' ); ?></span>
									</div>
								<?php endif; ?>
								<?php if(get_field( 'energimaerkning' )): ?>
									<div class="boligData__table__single">
										<span>Energimærkning:</span>
										<span class="energyType energyType--<?php the_field( 'energimaerkning' ); ?>"><?php the_field( 'energimaerkning' ); ?></span>
									</div>
								<?php endif; ?>
							</div>
							<?php if(get_field( 'tjek_boliglan' ))
								printf(
									'<div class="buttonLeft"><a href="%s" target="%s" class="boligData__tjek">%s</a></div>',
									get_field( 'tjek_boliglan' )['url'],
									get_field( 'tjek_boliglan' )['target'],
									get_field( 'tjek_boliglan' )['title']
								);
							 ?>
							 <div class="buttonFull">
								 <a href="#" class="button button--green button--arrow"><span>Bestil fremvisning</span></a>
								 <a href="#" class="button button--green button--arrow"><span>Giv et bud</span></a>
							 </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</article>