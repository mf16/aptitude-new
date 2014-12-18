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
			activeHTML = $activeElement.html();
			activeContentType = $activeElement.data('content-type');
		}
	});



$('body').on('click', '.addContentGroup', function() {
	//Create new with toolbar, empty content. Assign groupid and sectionid
	$('.sortable').prepend('<div class="panel panel-default"><a class="accordion-toggle collapsed" data-groupid="2" data-toggle="collapse" data-parent="#accordion" href="#collapseGroup_2" aria-expanded="false"><div class="panel-heading"><h4 class="panel-title"><span class="drag-marker"><i></i></span> Section Title #2 <i class="fa fa-trash-o trashGroupIcon pull-right" data-groupid="2"></i><span class="label label-primary pull-right"><i class="fa fa-tag"></i> Secondary Tag</span><span class="label label-primary pull-right primaryTag"><i class="fa fa-tag"></i> Primary Tag</span> </h4> </div></a> <div id="collapseGroup_2" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;" > <div class="panel-body"> <div class="row"> <div class="col-lg-2 col-md-3 addContentNav niceScroll"><section class="col-md-12 addRichTextEditor popovers" data-original-title="Text and Images" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Text and Images</section> <section class="col-md-12 addVideo popovers" data-original-title="Video" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Video</section> <section class="col-md-12 addDefinition popovers" data-original-title="Definition" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Definition</section> <section class="col-md-12 addTabs popovers" data-original-title="Tabs" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Tabs</section><section class="col-md-12 addTable popovers" data-original-title="Table" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Table</section><section class="col-md-12 addAccordian popovers" data-original-title="Accordian" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Accordian</section><section class="col-md-12 addTimeline popovers" data-original-title="Timeline" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Timeline</section><section class="col-md-12 addList popovers" data-original-title="List" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">List</section><section class="col-md-12 addTooltip popovers" data-original-title="Popover" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Tooltip</section> </div><div class="col-md-9 col-lg-10 contentPreview"><h3 class="no-mg-t mg-b-lg">Select an element from the list</h3></div></div></div></div></div>');
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
		$activeElement.html('<div class="row mg-b-md"><div class="col-md-8"><input type="text" id="groupTitle_1" class="groupTitle form-control" placeholder="Content title here..."></div><div class="col-md-4 text-right"><div class="btn btn-default pull-right saveContent">Save</div></div></div><textarea class="wysihtml5 form-control" placeholder="Enter text here..." rows="12"></textarea><div class="clearfix">&nbsp;</div><div class="row inputTagsRow"> <article class="col-md-4 col-lg-3 iconic-input"> <i class="fa fa-tag"></i> <input type="text" placeholder="Primary tag" class="form-control"> </article> <article class="col-md-4 col-lg-3 iconic-input"> <i class="fa fa-tag"></i> <input type="text" placeholder="Secondary tag" class="form-control"> </article> </div>');
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
		$activeElement.html('<h3 class="no-mg-t mg-b-lg">Definition </i><div class="btn btn-default pull-right">Save</div></h3><!--timeline start--> <div class="col-lg-10 col-md-112"><article class="col-md-4"> <section class="text-center"> <i class="fa fa-tag listIcon"></i><br>Test this setion </section> </article> <article class="col-md-4"> <section class="text-center"> <i class="fa fa-tag listIcon"></i><br>Test this setion </section> </article> <article class="col-md-4"> <section class="text-center"> <i class="fa fa-tag listIcon"></i><br>Test this setion </section></article>');
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
		//Make sure text inside is not just a placeholder and save content
		if (!$(".wysihtml5-sandbox").contents().find(".wysihtml5-editor").hasClass( "placeholder" )){
			contentToSave = $(".wysihtml5-sandbox").contents().find(".wysihtml5-editor").html();
			//$.ajax({url: , success:function(result){
				$activeElement.html(contentToSave);
			//}});
		}
	});

