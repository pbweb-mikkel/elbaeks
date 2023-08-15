<?php 
	$bolingstring = '';
	$boligkvm = '';
    $status = get_field('status');
    if(get_field( 'bolig__kld__grund' ) && get_field( 'kld' ) && get_field( 'grund' ) && get_field('erhvervsareal')){
        $bolingstring = "Bolig / erhv. / kld. / grund:";
        $boligkvm = get_field( 'bolig__kld__grund' ). ' / ' . get_field('erhvervsareal') . ' / ' . get_field( 'kld' ). ' / ' . get_field( 'grund' ) . ' m²';
    }else if(get_field( 'bolig__kld__grund' ) && get_field( 'kld' ) && get_field( 'grund' )){
		$bolingstring = "Bolig / kld. / grund:";
		$boligkvm = get_field( 'bolig__kld__grund' ) . ' / ' . get_field( 'kld' ). ' / ' . get_field( 'grund' ) . ' m²';
	}else if(get_field( 'bolig__kld__grund' ) && get_field( 'kld' ) && get_field( 'grund' ) == "0"){
		$bolingstring = "Bolig / kld.:";
		$boligkvm = get_field( 'bolig__kld__grund' ) . ' / ' . get_field( 'kld' ) . ' m²';
	}else if(get_field( 'bolig__kld__grund' ) && get_field( 'kld' ) == "0" && get_field( 'grund' )){
		$bolingstring = "Bolig / grund:";
		$boligkvm = get_field( 'bolig__kld__grund' ) . ' / ' . get_field( 'grund' ) . ' m²';
	}else if(get_field( 'bolig__kld__grund' ) && get_field( 'kld' ) == "0" && get_field( 'grund' ) == "0"){
		$bolingstring = "Bolig:";
		$boligkvm = get_field( 'bolig__kld__grund' ) . ' m²';
	}
	else if(get_field( 'bolig__kld__grund' ) == "0" && get_field( 'kld' ) && get_field( 'grund' )){
		$bolingstring = "Kld. / grund:";
		$boligkvm = get_field( 'kld' ) . ' / ' . get_field( 'grund' ) . ' m²';
	}else if(get_field( 'grund' )){
        $bolingstring = "Grund:";
        $boligkvm = get_field( 'grund' ) . ' m²';
    }
?>
<article id="bolig-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="boligWrap" id="bolig">
		<?php get_template_part('template-parts/parts/bolig', 'hero'); ?>
		<div class="boligInfo">
			<div class="container">
				<div class="row">
					<div class="col-12 col-lg-6">
						<div class="boligContent">
							<h1><?php the_field( 'title' ); ?></h1>
							<div class="boligContent__text">
								<?php the_field( 'text' ); ?>
								<div class="buttonCenter hiddenText">
									<a href="#" class="readAllText"><span>Læs mere</span></a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-6 boligDataColumn">
						<div class="boligData">
							<div class="boligData__address"><?php the_field( 'address' ); ?></div>
							<div class="boligData__table">
								<?php if(get_field( 'boligtype' )): ?>
									<div class="boligData__table__single">
										<span>Boligtype:</span>
										<span><?php the_field( 'boligtype' ); ?></span>
									</div>
								<?php endif; ?>
								<?php if($bolingstring && $boligkvm): ?>
									<div class="boligData__table__single">
										<span><?php echo $bolingstring; ?></span>
										<span><?php echo $boligkvm; ?></span>
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
								<?php if(get_field( 'kontant' ) && get_field( 'status' ) !== 'SOLD'): ?>
									<div class="boligData__table__single">
										<span>Kontant:</span>
										<?php if(!get_field( 'pris_pa_foresporgsel' )): ?>
											<span><?php the_field( 'kontant' ); ?></span>
										<?php else: ?>
											<span>Pris på forespørgsel</span>
										<?php endif; ?>
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
								<?php if(get_field( 'energimaerkning' )): $en = substr(get_field( 'energimaerkning' ), 0, 1); ?>
									<div class="boligData__table__single">
										<span>Energimærkning:</span>
										<span class="energyType energyType--<?php echo $en; ?>"><?php echo $en; ?></span>
									</div>
								<?php endif; ?>
							</div>
							<?php
								if(get_field( 'status' ) !== 'SOLD')
									printf(
										'<div class="buttonLeft"><a href="https://www.raadtilpenge.dk/Gode-raad/boliglaan/landingsside" target="__blank" class="boligData__tjek">Tjek boliglån</a></div>'
									);
							 ?>
							 <?php if(!in_array($status, ['SOLD', 'RESERVED'])): ?>
								 <div class="buttonFull">
									 <a href="#" class="button button--green button--arrow openPopup" data-target="fremvisning"><span>Bestil fremvisning</span></a>
									 <a href="#" class="button button--green button--arrow openPopup" data-target="givBud"><span>Giv et bud</span></a>
                                     <?php if(
                                             get_field('open_house') &&
                                             get_field('open_house_signup') &&
                                             (empty(get_field('open_house_signup_date')) || (!empty(get_field('open_house_signup_date')) && strtotime(get_field('open_house_signup_date')) > time()))
                                     ){
                                             echo '<a href="#" class="button button--green button--arrow openPopup" data-target="openHouseSignup"><span>Tilmeld åbent hus</span></a>';
                                     } ?>
								 </div>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</article>
<div id="noInstaBlock"></div>
<div class="boligModalWrap" id="fremvisning">
	<div class="boligModalWrap__overlay"></div>
	<div class="boligModal">
		<svg class="closeModal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
			<polygon class="cls-1" points="24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4"/>
		</svg>
        <?php $consent = Flexyapress_API::getConsents('Presentation') ?>
		<h3>Ønske om fremvisning</h3>
		<form class="modalForm" id="fremvisning_form">
			<div class="singleField">
				<label for="navn">Navn*</label>
				<input type="text" id="navn" name="navn" required autocomplete="none">
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
            <div class="singleField singleField--autocomplete singleField--autocompleteFull singleField--singleComplete inputShowFront" data-action="adresser">
                <label for="address-autocomplete">Adresse</label>
                <div class="autocompleteFields">
                    <div class="currentValueEntered"></div>
                    <input type="text" class="valueAutocomplete" id="address-autocomplete" name="address-autocomplete" autocomplete="none" tabindex="0">
                    <ul class="autocompleteList"></ul>
                </div>
                <input type="text" class="realValue" id="address" name="address" autocomplete="none" tabindex="-1">
                <input type="hidden" id="addressID" name="addressID" autocomplete="none" tabindex="-1">
            </div>
			<div class="modalForm__cal">
                <label for="date">Ønsket fremvisningsdato (valgfri)</label>
				<div id="bestilCalendar"></div>
                <input type="hidden" id="date" name="date">
                <p style="margin-top:10px;font-size:.875rem;">Vi vil bestræbe os på at imødekomme din ønskede fremvisningsdato så vidt det er muligt.</p>
			</div>
			<div class="singleField">
				<label for="onsker">Kommentar</label>
				<textarea name="onsker" id="onsker" rows="5"></textarea>
			</div>
			<div class="buttonCenter">
				<button class="button button--brown button--arrow" type="submit"><span>Bestil Fremvisning</span></button>
                <div id="fremvisning-loading" style="display: none;text-align: center;"><img src="<?= get_stylesheet_directory_uri() ?>/img/loading.gif" width="40" height="40"></div>
				<div class="successText">Tak for dit ønske om fremvisning. Du vil blive kontaktet hurtigst muligt</div>
				<div class="errorText">Der er sket en fejl og din fremvisning er muligivis ikke registreret. Du kan kontakte mægleren direkte på mail eller telefon istedet.</div>
			</div>
            <input type="hidden" name="consentIdGlobal" value="<?= $consent['id'] ?>">
		</form>
	</div>
	<input type="text" id="longitude" value="<?php the_field( 'longitude' ); ?>" hidden autocomplete="none">
	<input type="text" id="latitude" value="<?php the_field( 'latitude' ); ?>" hidden autocomplete="none">
	<input type="hidden" name="caseNo" id="caseNo" value="<?php the_field( 'sagsnummer' ); ?>" hidden autocomplete="none">
    <input type="hidden" name="shopNo" id="shopNo" value="99">
	<input type="hidden" id="caseRealtor" value="<?php the_field( 'case_realtor' ); ?>" hidden autocomplete="none">
</div>

<div class="boligModalWrap" id="givBud">
	<div class="boligModalWrap__overlay"></div>
	<div class="boligModal">
		<svg class="closeModal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
			<polygon class="cls-1" points="24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4"/>
		</svg>
		<h3>Giv et bud</h3>
        <?php $consent = Flexyapress_API::getConsents('PurchaseOffer') ?>
		<form class="modalForm" id="givbudForm">
			<div class="singleField">
				<label for="navn">Navn*</label>
				<input type="text" id="navn" name="navn" required autocomplete="none">
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
            <div class="singleField">
                <label for="bid">Bud i kr.</label>
                <input type="text" id="bid" name="bid" required autocomplete="none" oninput="this.value = this.value.replace(/[^0-9.]/g, '');">
            </div>
			<div class="singleField">
				<label for="onsker">Kommentar</label>
				<textarea name="onsker" id="onsker" rows="5"></textarea>
			</div>
			<p>Dit prisforslag er ikke bindende, og dit bud skal ses som starten på en evt. forhandling. Når du afgiver dit prisforslag, giver du samtidig ELBÆKS lov til at kontakte dig med henblik på dialog om forslaget.</p>
			<div class="buttonCenter">
				<button class="button button--brown button--arrow" type="submit"><span>Indsend bud</span></button>
                <div id="givbud-loading" style="display: none;text-align: center;"><img src="<?= get_stylesheet_directory_uri() ?>/img/loading.gif" width="40" height="40"></div>
				<div class="successText">Vi har modtaget dit bud og kontakter dig hurtigst muligt.</div>
                <div class="errorText">Der er sket en fejl og vi har ikke modtaget dit bud. Du kan kontakte mægleren direkte på mail eller telefon istedet.</div>
			</div>
            <input type="hidden" name="consentIdGlobal" value="<?= $consent['id'] ?>">
		</form>
	</div>
</div>

<div class="boligModalWrap" id="salgsopstilling">
	<div class="boligModalWrap__overlay"></div>
	<div class="boligModal boligModal--small">
		<svg class="closeModal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
			<polygon class="cls-1" points="24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4"/>
		</svg>
		<h3>Bestil salgsopstilling</h3>
        <?php
            $consent = Flexyapress_API::getConsents('SalesMaterialWithContact');
            $consentNoContact = Flexyapress_API::getConsents('SalesMaterial');
        ?>
		<form class="modalForm" id="salgsopstilling_form">
			<div class="singleField">
				<label for="navn">Navn*</label>
				<input type="text" id="navn" name="navn" required autocomplete="none">
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
			<div class="singleCheckbox">
				<input type="checkbox" name="bestil_agree" id="bestil_agree" class="checkboxInput" checked/>
				<label for="bestil_agree">
					<div class="checkboxLabel">
						<svg viewBox="0,0,50,50">
							<path d="M5 30 L 20 45 L 45 5"></path>
						</svg>
					</div>
					<span>Ja, ELBÆKS må kontakte mig</span>
				</label>
			</div>
			<div class="buttonCenter">
                <div id="salgsopstilling-loading" style="display: none;text-align: center;"><img src="<?= get_stylesheet_directory_uri() ?>/img/loading.gif" width="40" height="40"></div>
				<button class="button button--brown button--arrow" type="submit"><span>Bestil salgsopstilling</span></button>
				<div class="successText">Tak, vi har sendt dig en mail med salgsopstillingen</div>
                <div class="errorText">Der er sket en fejl med din henvendelse. Du kan kontakte mægleren direkte på mail eller telefon istedet.</div>
			</div>
            <input type="hidden" name="consentIdGlobalWithContact" value="<?= $consent['id'] ?>">
            <input type="hidden" name="consentIdGlobalWithoutContact" value="<?= $consentNoContact['id'] ?>">
		</form>
		<input type="text" hidden id="salgsopstilling_file" value="<?php the_field( 'salgsopstilling_pdf' ); ?>" autocomplete="none">
	</div>
	<div id="stickHeader"></div>
</div>
<?php if(
    get_field('open_house') &&
    get_field('open_house_signup') &&
    (empty(get_field('open_house_signup_date')) || (!empty(get_field('open_house_signup_date')) && strtotime(get_field('open_house_signup_date')) > time()))
){
?>
<div class="boligModalWrap" id="openHouseSignup">
    <div class="boligModalWrap__overlay"></div>
    <div class="boligModal boligModal--small">
        <svg class="closeModal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <polygon class="cls-1" points="24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4"/>
        </svg>
        <h3>Tilmeld åbent hus</h3>
        <?php $consent = Flexyapress_API::getConsents('OpenHouse') ?>
        <form class="modalForm" id="openhouse_form">
            <div class="singleField">
                <label for="navn">Navn*</label>
                <input type="text" id="navn" name="navn" required autocomplete="none">
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
            <div class="singleField singleField--autocomplete singleField--autocompleteFull singleField--singleComplete inputShowFront" data-action="adresser">
                <label for="address-autocomplete">Adresse</label>
                <div class="autocompleteFields">
                    <div class="currentValueEntered"></div>
                    <input type="text" class="valueAutocomplete" id="address-autocomplete" name="address-autocomplete" autocomplete="none" tabindex="0">
                    <ul class="autocompleteList"></ul>
                </div>
                <input type="text" class="realValue" id="address" name="address" autocomplete="none" tabindex="-1">
                <input type="hidden" id="addressID" name="addressID" autocomplete="none" tabindex="-1">
            </div>
            <div class="singleField">
                <label for="onsker">Kommentar</label>
                <textarea name="onsker" id="onsker" rows="5"></textarea>
            </div>
            <div class="buttonCenter">
                <div id="openhouse-loading" style="display: none;text-align: center;"><img src="<?= get_stylesheet_directory_uri() ?>/img/loading.gif" width="40" height="40"></div>
                <button class="button button--brown button--arrow" type="submit"><span>Tilmeld åbent hus</span></button>
                <div class="successText">Tak, vi har registreret din tilmelding</div>
                <div class="errorText">Der er sket en fejl og din tilmelding er muligivis ikke registreret. Du kan kontakte mægleren direkte på mail eller telefon istedet.</div>
            </div>
            <input type="hidden" name="consentIdGlobal" value="<?= $consent['id'] ?>">
            <input type="hidden" name="openHouseId" value="<?= get_field('open_house_id') ?>">
            <input type="hidden" name="openHouseStartTime" value="<?= get_field('open_house_start_time') ?>">
        </form>
    </div>
    <div id="stickHeader"></div>
</div>
<?php } ?>