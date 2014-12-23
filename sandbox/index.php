<?php include '../includes/head.php';?>
<body>
  <?php include '../includes/header.php';?>
  <?php include '../includes/sidebar.php';?>
  <link rel="stylesheet" type="text/css" href="/assets/bootstrap-wysihtml5/bootstrap-wysihtml5.css" />
  <link rel="stylesheet" type="text/css" href="/assets/slick/slick.css"/>

  <!-- Modal -->
  <div class="modal fade" id="defaultModal" tabindex="-1" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
          <h4 class="modal-title" id="defaultModalLabel"></h4>
        </div>
        <div class="modal-body" id="defaultModalBody">
        </div>
        <div class="modal-footer" id="defaultModalFooter">
        </div>
      </div>
    </div>
  </div>

  <!--main content start-->
  <section id="main-content">
    <!-- page start-->
    <section class="wrapper">
      <h1>MODIFY CONTENT</h1>
      <div class="row">
        <div class="col-md-12 col-lg-6">

          <ul class="breadcrumbs-alt">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a class="active-trail active" href="#">Math 1050</a>
            </li>
            <li>
              <a class="active-trail active" href="#">Further Topics in Functions</a>
            </li>
            <li>
              <a class="current" href="#">Composition of Functions</a>
            </li>
          </ul>
        </div>
        <div class="col-md-12 col-lg-6 text-right"><div class="btn btn-primary mg-r-md addContentGroup" id="addContentGroup">+ Add More Content</div><div class="btn btn-default">Preview Section</div></div>
      </div>
      <div class="mg-b-md hidden-lg"></div>
      <div class="panel-group mg-b-20 sortable" id="accordion">
        <div class="panel panel-default accordionPanel">
          <a class="accordion-toggle collapsed" data-groupid="1" data-toggle="collapse" data-parent="#accordion" href="#collapseGroup_1" aria-expanded="false">
            <div class="panel-heading">
              <h4 class="panel-title">
                <span class="drag-marker"><i></i></span>
                  Temporary title
                <i class="fa fa-trash-o trashGroupIcon pull-right" data-groupid="1"></i>
                <span class="label label-primary pull-right"><i class="fa fa-tag"></i> Secondary Tag</span>
                <span class="label label-primary pull-right primaryTag"><i class="fa fa-tag"></i> Primary Tag</span>
              </h4>
            </div>
          </a>
          <div id="collapseGroup_1" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;" >
            <div class="panel-body">
              <div class="row">
                <div class="col-lg-2 col-md-3 addContentNav niceScroll">
                  <section class="col-md-12 addRichTextEditor popovers" data-original-title="Text and Images" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Text and Images</section>
                  <section class="col-md-12 addVideo popovers" data-original-title="Video" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Video</section>
                  <section class="col-md-12 addDefinition popovers" data-original-title="Definition" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Definition</section>
                  <section class="col-md-12 addTabs popovers" data-original-title="Tabs" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Tabs</section>
                  <section class="col-md-12 addGraphorChart popovers" data-original-title="Graph or Chart" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Graph or Chart</section>
                  <section class="col-md-12 addPracticeProblem popovers" data-original-title="Practice Problem" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Practice Problem</section>
                  <section class="col-md-12 addTable popovers" data-original-title="Table" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Table</section>
                  <section class="col-md-12 addAccordion popovers" data-original-title="Accordion" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Accordion</section>
                  <section class="col-md-12 addTimeline popovers" data-original-title="Timeline" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Timeline</section>
                  <section class="col-md-12 addList popovers" data-original-title="List" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">List</section>
                  <section class="col-md-12 addLink popovers" data-original-title="Link" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Link</section>
                  <section class="col-md-12 addTooltip popovers" data-original-title="Popover" data-html="true" data-content="" data-container="body" data-placement="right" data-trigger="hover" data-delay="500">Tooltip</section>
                </div>
                <!--
                THIS IS FOR MULTIPLE SECTIONS OF CONTENT ON ONE GROUP
                <div class="col-md-12 horizontalCarousel">
                    <div>your content</div>
                    <div>your content</div>
                    <div>your content</div>
                </div>
                -->
                <div class="col-md-9 col-lg-10 contentPreview">
                  <div class="content" id="content_1" data-empty="true" data-element-active="false" data-content-type="null" data-contentid="1">
                    <h3 class="no-mg-t mg-b-lg">Select an element from the list <!--<div class="btn btn-default pull-right">Save</div>--></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- page end-->
  </section>
  <!--main content end-->

  <?php include '../includes/rightSidebar.php';?>
  <?php include '../includes/footer.php';?>
  <link class="jsbin" href="/css/jquery-ui.css" rel="stylesheet" type="text/css" />
  <script class="jsbin" src="/js/jquery-ui.min.js"></script>
  <script type="text/javascript" src="/js/jquery-migrate-1.2.1.min.js"></script>
  <script type="text/javascript" src="/assets/bootstrap-wysihtml5/wysihtml5-0.3.0.js"></script>
  <script type="text/javascript" src="/assets/bootstrap-wysihtml5/bootstrap-wysihtml5.js"></script>
  <script type="text/javascript" src="/assets/data-tables/jquery.dataTables.js"></script>
  <script type="text/javascript" src="/assets/data-tables/DT_bootstrap.js"></script>
  <script type="text/javascript" src="/assets/slick/slick.min.js"></script>
  <script type="text/javascript" src="/js/editable-table.js"></script>
  <script type="text/javascript" src="/sandbox/script.js"></script>
</body>
</html>






























                  <!-- Text and Images - start--
                  <textarea class="wysihtml5 form-control" rows="12"></textarea>
                  <!-- Text and Images - end-->


                  <!-- Embed video - start
                  <div class="input-group">
                      <span class="input-group-addon">Embed</span>
                      <input type="text" class="form-control" placeholder="Place embed code here... ">
                  </div>
                  <!-- Embed video - end-->


                  <!--DEFINITION: START--
                  <section class="row-fluid" style="margin-right: 25px; margin-left: -15px;">
                    <article class="col-xs-12 mg-b-lg definition">
                      <article class="col-md-1">
                      </article>
                      <article class="col-md-11">
                        <blockquote>
                          <p class="vote-text">Suppose \(f\) and \(g\) are two functions. The <strong>composite</strong> of \(g\) with \(f\), denoted \(g \circ f\), is deﬁned by the formula \((g \circ f)(x) = g(f(x))\), provided \(x\) is an element of the domain of \(f\) and \(f(x)\) is an element of the domain of \(g\).</p>
                        </blockquote>
                      </article>
                    </article>
                  </section>
                  <!--DEFINITION: END-->


                  <!-- Tabs
                  <div class="row">
                    <div class="col-md-6">
                      <section class="panel">
                        <header class="panel-heading tab-bg-dark-navy-blue ">
                          <ul class="nav nav-tabs">
                            <li class="active">
                              <a data-toggle="tab" href="#home" aria-expanded="false">Home</a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#about" aria-expanded="true">About</a>
                            </li>
                            <li class="">
                              <a data-toggle="tab" href="#contact" aria-expanded="false">+ New tab</a>
                            </li>
                          </ul>
                        </header>
                        <div class="panel-body grayBg">
                          <div class="tab-content">
                            <div id="home" class="tab-pane active">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque laboriosam placeat repudiandae tempora facere magnam facilis pariatur eius ad iste necessitatibus, est corporis, consequatur sunt. Iste, voluptates, fuga! Perspiciatis, molestiae.
                            </div>
                            <div id="about" class="tab-pane">About</div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  -->


                  <!--timeline start--
                  <div class="col-lg-8 col-md-10">
                    <section class="panel">
                      <div class="panel-body timeline-panel-body">
                        <div class="text-center mg-b-30">
                          <h3 class="timeline-title">Timeline</h3>
                          <p class="t-info">This is a project timeline</p>
                        </div>

                        <div class="timeline">
                          <article class="timeline-item">
                            <div class="timeline-desk">
                              <div class="panel">
                                <div class="panel-body">
                                  <span class="arrow"></span>
                                  <span class="timeline-icon"></span>
                                  <span class="timeline-date">08:25 am</span>
                                  <h1 class="orange">12 July | Sunday</h1>
                                  <p>Lorem ipsum dolor sit amet consiquest dio</p>
                                </div>
                              </div>
                            </div>
                          </article>
                          <article class="timeline-item alt">
                            <div class="timeline-desk">
                              <div class="panel">
                                <div class="panel-body">
                                  <span class="arrow-alt"></span>
                                  <span class="timeline-icon"></span>
                                  <span class="timeline-date">10:00 am</span>
                                  <h1 class="orange">10 July | Wednesday</h1>
                                  <p><a href="#">Jonathan Smith</a> added new milestone <span><a href="#" class="orange">ERP</a></span></p>
                                </div>
                              </div>
                            </div>
                          </article>
                          <article class="timeline-item">
                            <div class="timeline-desk">
                              <div class="panel">
                                <div class="panel-body">
                                  <span class="arrow"></span>
                                  <span class="timeline-icon"></span>
                                  <span class="timeline-date">11:35 am</span>
                                  <h1 class="orange">05 July | Monday</h1>
                                  <p><a href="#">Anjelina Joli</a> added new album <span><a href="#" class="orange">PARTY TIME</a></span></p>
                                  <div class="album">
                                    <a href="#">
                                      <img alt="" src="/img/sm-img-1.jpg">
                                    </a>
                                    <a href="#">
                                      <img alt="" src="/img/sm-img-2.jpg">
                                    </a>
                                    <a href="#">
                                      <img alt="" src="/img/sm-img-3.jpg">
                                    </a>
                                    <a href="#">
                                      <img alt="" src="/img/sm-img-1.jpg">
                                    </a>
                                    <a href="#">
                                      <img alt="" src="/img/sm-img-2.jpg">
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                          <article class="timeline-item alt">
                            <div class="timeline-desk">
                              <div class="panel">
                                <div class="panel-body">
                                  <span class="arrow-alt"></span>
                                  <span class="timeline-icon"></span>
                                  <span class="timeline-date">3:20 pm</span>
                                  <h1 class="orange">29 June | Saturday</h1>
                                  <p>Lorem ipsum dolor sit amet consiquest dio</p>
                                  <div class="notification">
                                    <i class=" fa fa-exclamation-sign"></i> New task added for <a href="#">Denial Collins</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>

                      </div>
                    </section>
                  </div>
                  <!--timeline end-->


                  <!--Acoridan - start--
                  <div class="panel-group mg-b-20" id="accordion_2">
                    <div class="panel panel-default">
                      <div class="panel-heading grayBg">
                        <h4 class="panel-title">
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_2" href="#collapse_1" aria-expanded="false">
                            Collapsible Group Item #1
                          </a>
                        </h4>
                      </div>
                      <div id="collapse_1" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                        <div class="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading grayBg">
                        <h4 class="panel-title">
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_2" href="#collapse_2" aria-expanded="false">
                            Collapsible Group Item #2
                          </a>
                        </h4>
                      </div>
                      <div id="collapse_2" class="panel-collapse collapse" aria-expanded="false">
                        <div class="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading grayBg">
                        <h4 class="panel-title">
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_2" href="#collapse_3" aria-expanded="false">
                            Collapsible Group Item #3
                          </a>
                        </h4>
                      </div>
                      <div id="collapse_3" class="panel-collapse collapse" aria-expanded="false">
                        <div class="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--Acoridan - end-->



                  <!--List - start--
                  <article class="col-md-4">
                     <section class="text-center">
                       <i class="fa fa-tag listIcon"></i><br>
                       Test this setion
                     </section>
                   </article>
                   <article class="col-md-4">
                     <section class="text-center">
                       <i class="fa fa-tag listIcon"></i><br>
                       Test this setion
                     </section>
                   </article>
                   <article class="col-md-4">
                     <section class="text-center">
                       <i class="fa fa-tag listIcon"></i><br>
                       Test this setion
                     </section>
                   </article>
                  <!--List - end-->

                  <!--Table - start--
                  <button id="editable-sample_new" class="btn green">
                      Add New Row<i class="fa fa-plus"></i>
                  </button>
                  <table class="table table-striped table-hover table-bordered dataTable" id="editable-sample" aria-describedby="editable-sample_info">
                    <thead>
                      <tr role="row">
                        <th class="sorting_disabled" role="columnheader" rowspan="1" colspan="1" aria-label="Username" style="width: 177px;">
                          Username
                        </th>
                        <th class="sorting" role="columnheader" tabindex="0" aria-controls="editable-sample" rowspan="1" colspan="1" aria-label="Full Name: activate to sort column ascending" style="width: 263px;">
                          Full Name
                        </th>
                        <th class="sorting" role="columnheader" tabindex="0" aria-controls="editable-sample" rowspan="1" colspan="1" aria-label="Points: activate to sort column ascending" style="width: 118px;">
                          Points
                        </th>
                        <th class="sorting" role="columnheader" tabindex="0" aria-controls="editable-sample" rowspan="1" colspan="1" aria-label="Notes: activate to sort column ascending" style="width: 168px;">
                          Notes
                        </th>
                        <th class="sorting" role="columnheader" tabindex="0" aria-controls="editable-sample" rowspan="1" colspan="1" aria-label="Edit: activate to sort column ascending" style="width: 84px;">
                          Edit
                        </th>
                        <th class="sorting" role="columnheader" tabindex="0" aria-controls="editable-sample" rowspan="1" colspan="1" aria-label="Delete: activate to sort column ascending" style="width: 119px;">
                          Delete
                        </th>
                      </tr>
                    </thead>

                    <tbody role="alert" aria-live="polite" aria-relevant="all"><tr class="odd">
                      <td class=" sorting_1">Admin</td>
                      <td class=" "> Flat Lab</td>
                      <td class=" ">462</td>
                      <td class="center ">new user</td>
                      <td class=" "><a class="edit" href="javascript:;">Edit</a></td>
                      <td class=" "><a class="delete" href="javascript:;">Delete</a></td>
                    </tr>
                    <tr class="even">
                      <td class=" sorting_1">Admin</td>
                      <td class=" "> Flat Lab</td>
                      <td class=" ">462</td>
                      <td class="center ">new user</td>
                      <td class=" "><a class="edit" href="javascript:;">Edit</a></td>
                      <td class=" "><a class="delete" href="javascript:;">Delete</a></td>
                    </tr>
                    <tr class="odd">
                      <td class=" sorting_1">Dulal</td>
                      <td class=" ">Jonathan Smith</td>
                      <td class=" ">434</td>
                      <td class="center ">new user</td>
                      <td class=" "><a class="edit" href="javascript:;">Edit</a></td>
                      <td class=" "><a class="delete" href="javascript:;">Delete</a></td>
                    </tr>
                    <tr class="even">
                      <td class=" sorting_1">Dulal</td>
                      <td class=" ">Jonathan Smith</td>
                      <td class=" ">434</td>
                      <td class="center ">new user</td>
                      <td class=" "><a class="edit" href="javascript:;">Edit</a></td>
                      <td class=" "><a class="delete" href="javascript:;">Delete</a></td>
                    </tr>
                    <tr class="odd">
                      <td class=" sorting_1">Jhon Doe</td>
                      <td class=" ">Jhon Doe </td>
                      <td class=" ">1234</td>
                      <td class="center ">super user</td>
                      <td class=" "><a class="edit" href="javascript:;">Edit</a></td>
                      <td class=" "><a class="delete" href="javascript:;">Delete</a></td>
                    </tr>
                  </tbody>
                </table>

                  <!--Table - end NEED TO INITIALIZE TABLE-->


                  <!--Popovers code - start--
                  <script type="text/javascript">
                    $(this).addClass('popovers');
                    $(this).data('original-title', 'Title here');
                    $(this).data('html', 'true');
                    $(this).data('content', 'Content here');
                    $(this).data('container', 'body');
                    $(this).data('placement', 'right');
                    $(this).data('trigger', 'hover');
                    $(this).data('delay', '500');
                  </script>
                  <!--Popovers code - end-->




                  <!--
                    Link - can be applied to element
                    Practice Problems
                      simplify
                      solve for x
                      graph the equation - jsxgraph
                    Graph of chart - not being to edit live.
                      Options are:
                      JSXGraph for drawing a line or curve
                      AMCharts to draw a bar chart, a line chart, or pie
                  -->
