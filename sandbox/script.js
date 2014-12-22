/* Table of Contents
   *    [SECTION]..............[DESCRIPTION]
   1.   On Page load....................functions for when the page loads and jquery initializes
   2.   Toolbar onclick functions.......function group for click events on toolbar
   3.   Save content function...........parse and pass new content to db to save
   Quickly find the section you're looking for by simple doing (CMD/CTRL + F $[SECTION])
/*
	Global variables:
		$activeElement
		activeHTML
		activeGroupid
		activeContentid
		activeContentType
		elementActive - default is false
		accordionOpen - default is false
*/


/*TODO-
be able to remove content ->   '<i class="fa fa-trash-o trashSectionIcon pull-right" data-groupid="1">'

*/

var $activeElement;
var activeHTML;
var activeGroupid;
var activeContentid;
var activeContentType;
var elementActive = false;
var accordionOpen = false;

	$('body').on('click', '.accordion-toggle', function() {
		//todo - check if active element is open (save, cancel, or delete changes)
		if (activeGroupid == $(this).data('groupid')){
			accordionOpen = false;
			activeGroupid = null;
			activeContentid = null;
			activeContentType = null;
			activeHTML = null;
			elementActive = false;
		}
		else {
			accordionOpen = true;
			activeGroupid = $(this).data('groupid');
			activeContentid = $('#collapseGroup_'+activeGroupid+'>.panel-body>.row>.contentPreview>.content').data('contentid');
			$activeElement = $('#content_'+activeContentid);
			activeHTML = $('#content_'+activeContentid+'>.contentContainer').html();
			activeContentType = $('#content_'+activeContentid+'>.panel-body>.row>.contentPreview').data('content-type');
		}
	});



	/*<div class="panel-collapse collapse" id="collapseGroup_2" style="height: 0px;">
			<div class="panel-body">
				<div class="row">
					<div class="col-lg-2 col-md-3 addContentNav niceScroll">
						<section class="col-md-12 addRichTextEditor popovers" data-container="body" data-content="" data-delay="500" data-html="true" data-original-title="Text and Images" data-placement="right" data-trigger="hover">
							Text and Images
						</section>

						<section class="col-md-12 addVideo popovers" data-container="body" data-content="" data-delay="500" data-html="true" data-original-title="Video" data-placement="right" data-trigger="hover">
							Video
						</section>

						<section class="col-md-12 addDefinition popovers" data-container="body" data-content="" data-delay="500" data-html="true" data-original-title="Definition" data-placement="right" data-trigger="hover">
							Definition
						</section>

						<section class="col-md-12 addTabs popovers" data-container="body" data-content="" data-delay="500" data-html="true" data-original-title="Tabs" data-placement="right" data-trigger="hover">
							Tabs
						</section>

						<section class="col-md-12 addTable popovers" data-container="body" data-content="" data-delay="500" data-html="true" data-original-title="Table" data-placement="right" data-trigger="hover">
							Table
						</section>

						<section class="col-md-12 addAccordian popovers" data-container="body" data-content="" data-delay="500" data-html="true" data-original-title="Accordian" data-placement="right" data-trigger="hover">
							Accordian
						</section>

						<section class="col-md-12 addTimeline popovers" data-container="body" data-content="" data-delay="500" data-html="true" data-original-title="Timeline" data-placement="right" data-trigger="hover">
							Timeline
						</section>

						<section class="col-md-12 addList popovers" data-container="body" data-content="" data-delay="500" data-html="true" data-original-title="List" data-placement="right" data-trigger="hover">
							List
						</section>

						<section class="col-md-12 addTooltip popovers" data-container="body" data-content="" data-delay="500" data-html="true" data-original-title="Popover" data-placement="right" data-trigger="hover">
							Tooltip
						</section>
					</div>

					<div class="col-md-9 col-lg-10 contentPreview">
						<h3 class="no-mg-t mg-b-lg">Select an element from the list</h3>
					</div>
				</div>
			</div>
		</div>*/

$('body').on('click', '#addContentGroup', function() {
	//Create new with toolbar, empty content. Assign groupid and sectionid
	$(this).attr('disabled', 'disabled');
	$('.sortable').prepend('<div class="panel panel-default"><a class="accordion-toggle collapsed" data-groupid="2" data-parent="#accordion" data-toggle="collapse" href="#collapseGroup_2"><div class="panel-heading"><div class="col-md-7"><input class="groupTitle form-control" id="groupTitle_1" placeholder="Content title here..." type="text"></div><div class="col-md-4 text-right"><article class="col-md-6 iconic-input"><i class="fa fa-tag"></i> <input class="form-control" placeholder="Primary tag" type="text"></article><article class="col-md-6 iconic-input"><i class="fa fa-tag"></i> <input class="form-control" placeholder="Secondary tag" type="text"></article></div><div class="btn btn-default pull-right saveGroup" data-save-type="text">Save</div></div></a></div>');
});


$('body').on('click', '.saveGroup', function() {
	$('#addContentGroup').removeAttr('disabled');
});


//Confirm if they really want to remove the group
	$('body').on('click', '.trashGroupIcon', function() {
		var groupid = $(this).data('groupid');
		modalQuestion('Hold up there...', 'Are you sure that you want to remove this group of content? Once it\'s deleted the only way to recover it is a banana cream pie delivered to our development team.', 'y/n', 'remove', groupid);
		return false;
	});

//Populate modal and take action
	function modalQuestion(title, bodyText, buttonTypes, action, target){
		var footer;
		if (buttonTypes == 'y/n'){
			if (action == 'remove'){
				footer = '<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button><button type="button" class="btn btn-primary removeGroup" data-target="'+target+'" clickid="#content_108" data-action="dblclick" data-dismiss="modal">Remove group</button>';
			}
		}
		$('#defaultModalLabel').text(title);
		$('#defaultModalBody').html(bodyText);
		$('#defaultModalFooter').html(footer);
		$('#defaultModal').modal('show');

	}

//Remove content group - comes from modal confirm
	$('body').on('click', '.removeGroup', function() {
		var targetid = $(this).data('target');
		$('#collapseGroup_'+targetid).parent().remove();
	});





/*
	On Page load
*/
	jQuery(document).ready(function() {
	//EditableTable.init();
	$('.wysihtml5').wysihtml5();
	$(".sortable").sortable({
		handle: ".drag-marker",
		axis: "y",
		cursor: "move",
		placeholder: 'ui-state-highlight',
		start: function (e,ui){
			$('.ui-state-highlight').css('height', $(ui.item).css('height'));
			$('.ui-state-highlight').css('line-height', $(ui.item).css('height'));
			$('.ui-state-highlight').css('width', $(ui.item).css('width'));
	//$(ui.placeholder).slideUp();
	},
	change: function (e,ui){
		$(ui.placeholder).hide().slideDown();
	}
	});
	$(".sortable").disableSelection();
	/*$('.horizontalCarousel').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
	accessibility: true,
	arrows: false
	});*/
	});

	$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(500).fadeOut(1000); // will fade out the white DIV that covers the website.
	});

	//Listen for keystrokes and clicking on adding content section for size changes in .contentPreview
	$(window).keypress(function(e) {
		checkHeight();
	});
	$('body').on('click',".addContentNav>section",function() {
		checkHeight();
	});
	function checkHeight(){
		var parentCon = $('.addContentNav'),
		child = $('.contentPreview').outerHeight();
		if(parentCon.height() < child){
			parentCon.height(child);
		}
	}







/*
	$Toolbar onclick functions
*/
	$('body').on('click', '.addRichTextEditor', function() {
		if($activeElement.data('empty') !== true){
			activeHTML = $activeElement.html();
		}
		else{
			activeHTML = '<h3 class="no-mg-t mg-b-lg">Select an element from the list</h3>';
		}
		$activeElement.html('<textarea class="wysihtml5 form-control" placeholder="Enter text here..." rows="12"></textarea><div class="clearfix">&nbsp;</div><div class="row inputTagsRow"></div>');
		$('.wysihtml5').wysihtml5();
		checkHeight();
	});

	$('body').on('click', '.addDefinition', function() {
		if($activeElement.data('empty') !== true){
			activeHTML = $activeElement.html();
		}
		else{
			activeHTML = '<h3 class="no-mg-t mg-b-lg">Select an element from the list</h3>';
		}
		$activeElement.html('<h3 class="no-mg-t mg-b-lg">Definition <div class="btn btn-default pull-right">Save</div></h3><textarea class="form-control" placeholder="Enter definition here..." rows="5"></textarea>');
		checkHeight();
	});

	$('body').on('click', '.addVideo', function() {
		if($activeElement.data('empty') !== true){
			activeHTML = $activeElement.html();
		}
		else{
			activeHTML = '<h3 class="no-mg-t mg-b-lg">Select an element from the list</h3>';
		}
		$activeElement.html('<h3 class="no-mg-t mg-b-lg">Definition <div class="btn btn-default pull-right">Save</div></h3><input class="form-control" placeholder="Enter embed code here...">');
		checkHeight();
	});


	$('body').on('click', '.addTabs', function() {
		if($activeElement.data('empty') !== true){
			activeHTML = $activeElement.html();
		}
		else{
			activeHTML = '<h3 class="no-mg-t mg-b-lg">Select an element from the list</h3>';
		}
		$activeElement.html('<h3 class="no-mg-t mg-b-lg">Definition <div class="btn btn-default pull-right">Save</div></h3><div class="row"> <div class="col-md-6"> <section class="panel"> <header class="panel-heading tab-bg-dark-navy-blue "> <ul class="nav nav-tabs"> <li class="active"> <a data-toggle="tab" href="#home" aria-expanded="false">Home</a> </li><li> <a data-toggle="tab" href="#about" aria-expanded="true">About</a> </li><li class=""> <a data-toggle="tab" href="#contact" aria-expanded="false">+ New tab</a> </li></ul> </header> <div class="panel-body grayBg"> <div class="tab-content"> <div id="home" class="tab-pane active"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque laboriosam placeat repudiandae tempora facere magnam facilis pariatur eius ad iste necessitatibus, est corporis, consequatur sunt. Iste, voluptates, fuga! Perspiciatis, molestiae. </div><div id="about" class="tab-pane">About</div></div></div></section> </div></div>');
		checkHeight();
	});

	$('body').on('click', '.addTable', function() {
		if($activeElement.data('empty') !== true){
			activeHTML = $activeElement.html();
		}
		else{
			activeHTML = '<h3 class="no-mg-t mg-b-lg">Select an element from the list</h3>';
		}
		$activeElement.html('<h3 class="no-mg-t mg-b-lg">Definition <div class="btn btn-default pull-right">Save</div></h3><div class="adv-table editable-table "> <div class="clearfix"> <div class="btn-group"> <button id="editable-sample_new" class="btn green"> Add New <i class="fa fa-plus"></i> </button> </div></div><div class="space15"></div><table class="table table-striped table-hover table-bordered" id="editable-sample"> <thead> <tr> <th>Username</th> <th>Full Name</th> <th>Points</th> <th>Notes</th> <th>Edit</th> <th>Delete</th> </tr></thead> <tbody> <tr class=""> <td>Jondi Rose</td><td>Alfred Jondi Rose</td><td>1234</td><td class="center">super user</td><td><a class="edit" href="javascript:;">Edit</a></td><td><a class="delete" href="javascript:;">Delete</a></td></tr><tr class=""> <td>Dulal</td><td>Jonathan Smith</td><td>434</td><td class="center">new user</td><td><a class="edit" href="javascript:;">Edit</a></td><td><a class="delete" href="javascript:;">Delete</a></td></tr><tr class=""> <td>Sumon</td><td> Sumon Ahmed</td><td>232</td><td class="center">super user</td><td><a class="edit" href="javascript:;">Edit</a></td><td><a class="delete" href="javascript:;">Delete</a></td></tr><tr class=""> <td>vectorlab</td><td>dk mosa</td><td>132</td><td class="center">elite user</td><td><a class="edit" href="javascript:;">Edit</a></td><td><a class="delete" href="javascript:;">Delete</a></td></tr><tr class=""> <td>Admin</td><td> Flat Lab</td><td>462</td><td class="center">new user</td><td><a class="edit" href="javascript:;">Edit</a></td><td><a class="delete" href="javascript:;">Delete</a></td></tr><tr class=""> <td>Rafiqul</td><td>Rafiqul dulal</td><td>62</td><td class="center">new user</td><td><a class="edit" href="javascript:;">Edit</a></td><td><a class="delete" href="javascript:;">Delete</a></td></tr><tr class=""> <td>Jhon Doe</td><td>Jhon Doe </td><td>1234</td><td class="center">super user</td><td><a class="edit" href="javascript:;">Edit</a></td><td><a class="delete" href="javascript:;">Delete</a></td></tr><tr class=""> <td>Dulal</td><td>Jonathan Smith</td><td>434</td><td class="center">new user</td><td><a class="edit" href="javascript:;">Edit</a></td><td><a class="delete" href="javascript:;">Delete</a></td></tr><tr class=""> <td>Sumon</td><td> Sumon Ahmed</td><td>232</td><td class="center">super user</td><td><a class="edit" href="javascript:;">Edit</a></td><td><a class="delete" href="javascript:;">Delete</a></td></tr><tr class=""> <td>vectorlab</td><td>dk mosa</td><td>132</td><td class="center">elite user</td><td><a class="edit" href="javascript:;">Edit</a></td><td><a class="delete" href="javascript:;">Delete</a></td></tr><tr class=""> <td>Admin</td><td> Flat Lab</td><td>462</td><td class="center">new user</td><td><a class="edit" href="javascript:;">Edit</a></td><td><a class="delete" href="javascript:;">Delete</a></td></tr><tr class=""> <td>Rafiqul</td><td>Rafiqul dulal</td><td>62</td><td class="center">new user</td><td><a class="edit" href="javascript:;">Edit</a></td><td><a class="delete" href="javascript:;">Delete</a></td></tr></tbody> </table> </div>');
      		EditableTable.init();
      		checkHeight();
	});

	$('body').on('click', '.addAccordion', function() {
		if($activeElement.data('empty') !== true){
			activeHTML = $activeElement.html();
		}
		else{
			activeHTML = '<h3 class="no-mg-t mg-b-lg">Select an element from the list</h3>';
		}
		$activeElement.html('<h3 class="no-mg-t mg-b-lg">Definition <div class="btn btn-default pull-right">Save</div></h3><!--Acoridan - start--> <div class="panel-group mg-b-20" id="accordion_2"> <div class="panel panel-default"> <div class="panel-heading grayBg"> <h4 class="panel-title"> <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_2" href="#collapse_1" aria-expanded="false"> Collapsible Group Item #1 </a> </h4> </div><div id="collapse_1" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;"> <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS. </div></div></div><div class="panel panel-default"> <div class="panel-heading grayBg"> <h4 class="panel-title"> <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_2" href="#collapse_2" aria-expanded="false"> Collapsible Group Item #2 </a> </h4> </div><div id="collapse_2" class="panel-collapse collapse" aria-expanded="false"> <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS. </div></div></div><div class="panel panel-default"> <div class="panel-heading grayBg"> <h4 class="panel-title"> <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_2" href="#collapse_3" aria-expanded="false"> Collapsible Group Item #3 </a> </h4> </div><div id="collapse_3" class="panel-collapse collapse" aria-expanded="false"> <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS. </div></div></div></div>');
		checkHeight();
	});

	$('body').on('click', '.addTimeline', function() {
		if($activeElement.data('empty') !== true){
			activeHTML = $activeElement.html();
		}
		else{
			activeHTML = '<h3 class="no-mg-t mg-b-lg">Select an element from the list</h3>';
		}
		$activeElement.html('<h3 class="no-mg-t mg-b-lg">Definition <div class="btn btn-default pull-right">Save</div></h3><!--timeline start--> <div class="col-lg-8 col-md-10"> <section class="panel"> <div class="panel-body timeline-panel-body"> <div class="text-center mg-b-30"> <h3 class="timeline-title">Timeline</h3> <p class="t-info">This is a project timeline</p></div><div class="timeline"> <article class="timeline-item"> <div class="timeline-desk"> <div class="panel"> <div class="panel-body"> <span class="arrow"></span> <span class="timeline-icon"></span> <span class="timeline-date">08:25 am</span> <h1 class="orange">12 July | Sunday</h1> <p>Lorem ipsum dolor sit amet consiquest dio</p></div></div></div></article> <article class="timeline-item alt"> <div class="timeline-desk"> <div class="panel"> <div class="panel-body"> <span class="arrow-alt"></span> <span class="timeline-icon"></span> <span class="timeline-date">10:00 am</span> <h1 class="orange">10 July | Wednesday</h1> <p><a href="#">Jonathan Smith</a> added new milestone <span><a href="#" class="orange">ERP</a></span></p></div></div></div></article> <article class="timeline-item"> <div class="timeline-desk"> <div class="panel"> <div class="panel-body"> <span class="arrow"></span> <span class="timeline-icon"></span> <span class="timeline-date">11:35 am</span> <h1 class="orange">05 July | Monday</h1> <p><a href="#">Anjelina Joli</a> added new album <span><a href="#" class="orange">PARTY TIME</a></span></p><div class="album"> <a href="#"> <img alt="" src="/img/sm-img-1.jpg"> </a> <a href="#"> <img alt="" src="/img/sm-img-2.jpg"> </a> <a href="#"> <img alt="" src="/img/sm-img-3.jpg"> </a> <a href="#"> <img alt="" src="/img/sm-img-1.jpg"> </a> <a href="#"> <img alt="" src="/img/sm-img-2.jpg"> </a> </div></div></div></div></article> <article class="timeline-item alt"> <div class="timeline-desk"> <div class="panel"> <div class="panel-body"> <span class="arrow-alt"></span> <span class="timeline-icon"></span> <span class="timeline-date">3:20 pm</span> <h1 class="orange">29 June | Saturday</h1> <p>Lorem ipsum dolor sit amet consiquest dio</p><div class="notification"> <i class=" fa fa-exclamation-sign"></i> New task added for <a href="#">Denial Collins</a> </div></div></div></div></article> </div></div></section> </div>');
		checkHeight();
	});

	$('body').on('click', '.addList', function() {
		if($activeElement.data('empty') !== true){
			activeHTML = $activeElement.html();
		}
		else{
			activeHTML = '<h3 class="no-mg-t mg-b-lg">Select an element from the list</h3>';
		}
		$activeElement.html('<h3 class="no-mg-t mg-b-lg">Definition </i><div class="btn btn-default pull-right">Save</div></h3><!--timeline start--> <div class="col-lg-10 col-md-112"><article class="col-md-4"> <section class="text-center"> <i class="fa fa-tag listIcon"></i><br>Test this setion </section> </article> <article class="col-md-4"> <section class="text-center"><i class="fa fa-tag listIcon"></i><br>Test this setion </section> </article> <article class="col-md-4"><section class="text-center"> <i class="fa fa-tag listIcon"></i><br>Test this setion </section></article>');
		checkHeight();
	});

	$('body').on('click', '.addGraphorChart', function() {
		//What kind of graph?
		//bar
		//line
		//area
		//pie


	});

	$('body').on('click', '.addPracticeProblem', function() {
		//solve for x
		//simplify
		//graph the equation
			//on a number line
			//line on a graph
			//parabola

	});





/*
	$Save content function
*/
	$('body').on('click', '.saveContent', function() {
		var contentToSave;
		var saveType = $(this).data('save-type');
		if(saveType == 'text'){
			//Make sure text inside is not just a placeholder and save content
			if (!$(".wysihtml5-sandbox").contents().find(".wysihtml5-editor").hasClass( "placeholder" )){
				contentToSave = $(".wysihtml5-sandbox").contents().find(".wysihtml5-editor").html();
				//$.ajax({url: , success:function(result){
					$activeElement.html('<div class="contentContainer">'+contentToSave+'</div>');
					$activeElement.prepend('<div class="row mg-b-md"><div class="col-md-8 contentTitle"><h3 class="no-mg-t mg-b-lg">Text</h3></div><div class="col-md-4 text-right"><div class="btn btn-default pull-right editContent" data-content-type="text">Edit</div></div></div>');
					activeHTML = $('#content_'+activeContentid+'>.contentContainer').html();
					activeContentType = 'text';
				//}});
			}
		}
	});

	$('body').on('click', '.editContent', function() {
		if(activeContentType == 'text'){
			$activeElement.html('<div class="row mg-b-md"><div class="col-md-8"><h3 class="no-mg-t mg-b-lg">Text</h3></div><div class="col-md-4 text-right"><div class="btn btn-default pull-right saveContent" data-save-type="text">Save</div></div></div><textarea class="wysihtml5 form-control" rows="12">'+activeHTML+'</textarea><div class="clearfix">&nbsp;</div><div class="row inputTagsRow"></div>');
			$('.wysihtml5').wysihtml5();
			checkHeight();
		}
		elementActive = true;
	});

