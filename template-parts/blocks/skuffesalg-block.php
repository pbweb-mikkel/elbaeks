<div class="skuffesalg">
	<div class="container">
		<div class="row row--reverse">
			<div class="col-12 col-lg-6">
				<?php if(get_field( 'image' ))
						printf(
							'<div class="kobert__image"><img  data-src="%s" class="lazyload" alt="%s" /></div>',
							get_field( 'image' )['sizes']['large'],
							get_field( 'image' )['alt']
						);
				?>
			</div>
			<div class="col-12 col-lg-6">
				<div class="skuffContent">
					<h1><?php the_field( 'title' ); ?></h1>
					<?php the_field( 'text' ); ?>
					<?php if ( have_rows( 'addresses' ) ) : ?>
						<div class="skuffContent__address">
							<?php while ( have_rows( 'addresses' ) ) : the_row(); ?>
								<div class="skuffContent__address__single">
									<span><?php the_sub_field( 'text' ); ?></span>
								</div>
							<?php endwhile; ?>
						</div>
					<?php endif; ?>
					<h2><?php the_field( 'form_title' ); ?></h2>
					<?php the_field( 'form_text' ); ?>
					<form id="skuffesalg_form">
						<div class="singleField">
							<label for="navn">Navn*</label>
							<input type="text" id="navn" name="navn" required autocomplete="none">
						</div>
                        <div class="singleField singleField--autocomplete singleField--autocompleteFull singleField--singleComplete" data-action="adresser">
                            <label for="address">Adresse*</label>
                            <div class="autocompleteFields">
                                <input type="text" class="realValue" id="address" name="address" autocomplete="none" tabindex="-1">
                                <div class="currentValueEntered"></div>
                                <input type="text" class="valueAutocomplete" autocomplete="none">
                                <input type="hidden" id="addressID" name="addressID" autocomplete="none" tabindex="-1">
                                <ul class="autocompleteList"></ul>
                            </div>
                        </div>
						<div class="singleField">
							<label for="telefon">Mobil*</label>
							<div class="singleField__mobile">
								<div class="singleField__mobile__area">
									<?php get_template_part('template-parts/parts/area-code', 'part'); ?>
								</div>
								<input type="tel" id="telefon" name="telefon" required autocomplete="none">
							</div>
						</div>
                        <div class="singleField">
                            <label for="email">E-mail*</label>
                            <input type="email" id="email" name="email" required autocomplete="none">
                        </div>
						<!--<div class="singleField">
							<label for="navn">Adresse*</label>
							<input type="text" id="address" name="address" required autocomplete="none">
						</div>-->
                        <div class="modalForm__checkbox">
                            <h5>Vælg</h5>
                            <div class="singleCheckbox">
                                <input type="radio" value="le@elbaeks.dk" name="realtor" id="modal_radio_1" class="checkboxInput"/>
                                <label for="modal_radio_1">
                                    <div class="checkboxLabel">
                                        <svg viewBox="0,0,50,50">
                                            <path d="M5 30 L 20 45 L 45 5"></path>
                                        </svg>
                                    </div>
                                    <span>Lars Elbæk</span>
                                </label>
                            </div>
                            <div class="singleCheckbox">
                                <input type="radio" value="fe@elbaeks.dk" name="realtor" id="modal_radio_2" class="checkboxInput"/>
                                <label for="modal_radio_2">
                                    <div class="checkboxLabel">
                                        <svg viewBox="0,0,50,50">
                                            <path d="M5 30 L 20 45 L 45 5"></path>
                                        </svg>
                                    </div>
                                    <span>Farnaz Elbæk</span>
                                </label>
                            </div>
                            <div class="singleCheckbox">
                                <input type="radio" value="" name="realtor" id="modal_radio_3" class="checkboxInput"/>
                                <label for="modal_radio_3">
                                    <div class="checkboxLabel">
                                        <svg viewBox="0,0,50,50">
                                            <path d="M5 30 L 20 45 L 45 5"></path>
                                        </svg>
                                    </div>
                                    <span>Ingen præferencer</span>
                                </label>
                            </div>
                        </div>
						<div class="singleField">
							<label for="onsker">Kommentar</label>
							<textarea name="onsker" id="onsker" rows="5"></textarea>
						</div>
						<div class="buttonCenter">
                            <div id="vurdering-loading" style="display: none;text-align: center;"><img src="<?= get_stylesheet_directory_uri() ?>/img/loading.gif" width="40" height="40"></div>
							<button class="button button--brown button--arrow"><span>Send</span></button>
							<div class="successText">Tak for dit ønske om en vurdering. Vi har sendt dig en bekræftelse på mail</div>
                            <div class="errorText">Der er sket en fejl med din henvendelse. Du kan kontakte mægleren direkte på mail eller telefon istedet.</div>
						</div>
                        <?php $consent = Flexyapress_API::getConsents('SalesValuation') ?>
                        <input type="hidden" name="consentIdGlobal" value="<?= $consent['id'] ?>">
                        <input type="hidden" name="shopNo" value="99">
					</form>
				</div>
			</div>
		</div>
	</div>
</div>