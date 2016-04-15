﻿document.write('<!DOCTYPE html>');
document.write('<html lang="en">');
document.write('<head>');
document.write('  <meta charset="utf-8" />');
document.write('  <title>Be Angular | Bootstrap Admin Web App with AngularJS</title>');
document.write('  <meta name="description" content="app, web app, responsive, responsive layout, admin, admin panel, admin dashboard, flat, flat ui, ui kit, AngularJS, ui route, charts, widgets, components" />');
document.write('  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />');
document.write('  <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />');
 
document.write('  <link rel="stylesheet" href="css/animate.css" type="text/css" />');
document.write('  <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />');
document.write('  <link rel="stylesheet" href="css/simple-line-icons.css" type="text/css" />');
document.write('  <link rel="stylesheet" href="css/font.css" type="text/css" />');
document.write('  <link rel="stylesheet" href="css/app.css" type="text/css" />');
document.write('</head>');
document.write('<body>');
document.write('  <div class="app app-header-fixed" id="app">');
document.write('    <!-- navbar -->');
document.write('    <div class="app-header navbar">');
document.write('      <!-- navbar header -->');
document.write('      <div class="navbar-header bg-dark">');
document.write('        <button class="pull-right visible-xs dk" data-toggle="class:show" data-target=".navbar-collapse">');
document.write('          <i class="glyphicon glyphicon-cog"></i>');
document.write('        </button>');
document.write('        <button class="pull-right visible-xs" data-toggle="class:off-screen" data-target=".app-aside" ui-scroll="app">');
document.write('          <i class="glyphicon glyphicon-align-justify"></i>');
document.write('        </button>');
document.write('        <!-- brand -->');
document.write('        <a href="#/" class="navbar-brand text-lt">');
document.write('          <i class="fa fa-btc"></i>');
document.write('          <img src="img/logo.png" alt="." class="hide">');
document.write('          <span class="hidden-folded m-l-xs">Angulr</span>');
document.write('        </a>');
document.write('        <!-- / brand -->');
document.write('      </div>');
document.write('      <!-- / navbar header -->');
document.write('');
document.write('      <!-- navbar collapse -->');
document.write('      <div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">');
document.write('        <!-- buttons -->');
document.write('        <div class="nav navbar-nav hidden-xs">');
document.write('          <a href="#" class="btn no-shadow navbar-btn" data-toggle="class:app-aside-folded" data-target=".app">');
document.write('            <i class="fa fa-dedent fa-fw text"></i>');
document.write('            <i class="fa fa-indent fa-fw text-active"></i>');
document.write('          </a>');
document.write('          <a href class="btn no-shadow navbar-btn" data-toggle="class:show" data-target="#aside-user">');
document.write('            <i class="icon-user fa-fw"></i>');
document.write('          </a>');
document.write('        </div>');
document.write('        <!-- / buttons -->');
document.write('');
document.write('       ');
document.write('');
document.write('        <!-- search form -->');
document.write('        <form class="navbar-form navbar-form-sm navbar-left shift" ui-shift="prependTo" data-target=".navbar-collapse" role="search" ng-controller="TypeaheadDemoCtrl">');
document.write('          <div class="form-group">');
document.write('            <div class="input-group">');
document.write('              <input type="text" ng-model="selected" typeahead="state for state in states | filter:$viewValue | limitTo:8" class="form-control input-sm bg-light no-border rounded padder" placeholder="Search projects...">');
document.write('              <span class="input-group-btn">');
document.write('                <button type="submit" class="btn btn-sm bg-light rounded"><i class="fa fa-search"></i></button>');
document.write('              </span>');
document.write('            </div>');
document.write('          </div>');
document.write('        </form>');
document.write('        <!-- / search form -->');
document.write('');
document.write('        <!-- nabar right -->');
document.write('        <ul class="nav navbar-nav navbar-right">');
document.write('          <li class="dropdown">');
document.write('            <a href="#" data-toggle="dropdown" class="dropdown-toggle">');
document.write('              <i class="icon-bell fa-fw"></i>');
document.write('              <span class="visible-xs-inline">Notifications</span>');
document.write('              <span class="badge badge-sm up bg-danger pull-right-xs">2</span>');
document.write('            </a>');
document.write('            <!-- dropdown -->');
document.write('            <div class="dropdown-menu w-xl animated fadeInUp">');
document.write('              <div class="panel bg-white">');
document.write('                <div class="panel-heading b-light bg-light">');
document.write('                  <strong>You have <span>2</span> notifications</strong>');
document.write('                </div>');
document.write('                <div class="list-group">');
document.write('                  <a href class="media list-group-item">');
document.write('                    <span class="pull-left thumb-sm">');
document.write('                      <img src="img/a0.jpg" alt="..." class="img-circle">');
document.write('                    </span>');
document.write('                    <span class="media-body block m-b-none">');
document.write('                      Use awesome animate.css<br>');
document.write('                      <small class="text-muted">10 minutes ago</small>');
document.write('                    </span>');
document.write('                  </a>');
document.write('                  <a href class="media list-group-item">');
document.write('                    <span class="media-body block m-b-none">');
document.write('                      1.0 initial released<br>');
document.write('                      <small class="text-muted">1 hour ago</small>');
document.write('                    </span>');
document.write('                  </a>');
document.write('                </div>');
document.write('                <div class="panel-footer text-sm">');
document.write('                  <a href class="pull-right"><i class="fa fa-cog"></i></a>');
document.write('                  <a href="#notes" data-toggle="class:show animated fadeInRight">See all the notifications</a>');
document.write('                </div>');
document.write('              </div>');
document.write('            </div>');
document.write('            <!-- / dropdown -->');
document.write('          </li>');
document.write('          <li class="dropdown">');
document.write('            <a href="#" data-toggle="dropdown" class="dropdown-toggle clear" data-toggle="dropdown">');
document.write('              <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">');
document.write('                <img src="img/a0.jpg" alt="...">');
document.write('                <i class="on md b-white bottom"></i>');
document.write('              </span>');
document.write('              <span class="hidden-sm hidden-md">John.Smith</span> <b class="caret"></b>');
document.write('            </a>');
document.write('            <!-- dropdown -->');
document.write('            <ul class="dropdown-menu animated fadeInRight w">');
document.write('              <li class="wrapper b-b m-b-sm bg-light m-t-n-xs">');
document.write('                <div>');
document.write('                  <p>300mb of 500mb used</p>');
document.write('                </div>');
document.write('                <progressbar value="60" class="progress-xs m-b-none bg-white"></progressbar>');
document.write('              </li>');
document.write('              <li>');
document.write('                <a href>');
document.write('                  <span class="badge bg-danger pull-right">30%</span>');
document.write('                  <span>Settings</span>');
document.write('                </a>');
document.write('              </li>');
document.write('              <li>');
document.write('                <a ui-sref="app.page.profile">Profile</a>');
document.write('              </li>');
document.write('              <li>');
document.write('                <a ui-sref="app.docs">');
document.write('                  <span class="label bg-info pull-right">new</span>');
document.write('                  Help');
document.write('                </a>');
document.write('              </li>');
document.write('              <li class="divider"></li>');
document.write('              <li>');
document.write('                <a ui-sref="access.signin">Logout</a>');
document.write('              </li>');
document.write('            </ul>');
document.write('            <!-- / dropdown -->');
document.write('          </li>');
document.write('        </ul>');
document.write('        <!-- / navbar right -->');
document.write('');
document.write('      </div>');
document.write('      <!-- / navbar collapse -->');
document.write('    </div>');
document.write('    <!-- / navbar -->');
document.write('');
document.write('    <!-- menu -->');
document.write('    <div class="app-aside hidden-xs bg-dark">');
document.write('      <div class="aside-wrap">');
document.write('        <div class="navi-wrap">');
document.write('          <!-- user -->');
document.write('          <div class="clearfix hidden-xs text-center hide" id="aside-user">');
document.write('            <div class="dropdown wrapper">');
document.write('              <a ui-sref="app.page.profile">');
document.write('                <span class="thumb-lg w-auto-folded avatar m-t-sm">');
document.write('                  <img src="img/a0.jpg" class="img-full" alt="...">');
document.write('                </span>');
document.write('              </a>');
document.write('              <a href="#" data-toggle="dropdown" class="dropdown-toggle hidden-folded">');
document.write('                <span class="clear">');
document.write('                  <span class="block m-t-sm">');
document.write('                    <strong class="font-bold text-lt">John.Smith</strong> ');
document.write('                    <b class="caret"></b>');
document.write('                  </span>');
document.write('                  <span class="text-muted text-xs block">Art Director</span>');
document.write('                </span>');
document.write('              </a>');
document.write('              <!-- dropdown -->');
document.write('              <ul class="dropdown-menu animated fadeInRight w hidden-folded">');
document.write('                <li class="wrapper b-b m-b-sm bg-info m-t-n-xs">');
document.write('                  <span class="arrow top hidden-folded arrow-info"></span>');
document.write('                  <div>');
document.write('                    <p>300mb of 500mb used</p>');
document.write('                  </div>');
document.write('                  <progressbar value="60" type="white" class="progress-xs m-b-none dker"></progressbar>');
document.write('                </li>');
document.write('                <li>');
document.write('                  <a href>Settings</a>');
document.write('                </li>');
document.write('                <li>');
document.write('                  <a ui-sref="app.page.profile">Profile</a>');
document.write('                </li>');
document.write('                <li>');
document.write('                  <a href>');
document.write('                    <span class="badge bg-danger pull-right">3</span>');
document.write('                    Notifications');
document.write('                  </a>');
document.write('                </li>');
document.write('                <li class="divider"></li>');
document.write('                <li>');
document.write('                  <a ui-sref="access.signin">Logout</a>');
document.write('                </li>');
document.write('              </ul>');
document.write('              <!-- / dropdown -->');
document.write('            </div>');
document.write('            <div class="line dk hidden-folded"></div>');
document.write('          </div>');
document.write('          <!-- / user -->');
document.write('');
document.write('          <!-- nav -->');
document.write('          <nav ui-nav class="navi">');
document.write('            <ul class="nav">');
document.write('              <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">');
document.write('                <span translate="aside.nav.HEADER">Navigation</span>');
document.write('              </li>');
document.write('              <li>');
document.write('                <a href class="auto">      ');
document.write('                  <span class="pull-right text-muted">');
document.write('                    <i class="fa fa-fw fa-angle-right text"></i>');
document.write('                    <i class="fa fa-fw fa-angle-down text-active"></i>');
document.write('                  </span>');
document.write('                  <i class="glyphicon glyphicon-stats icon text-primary-dker"></i>');
document.write('                  <span class="font-bold" translate="aside.nav.DASHBOARD">商品</span>');
document.write('                </a>');
document.write('                <ul class="nav nav-sub dk">');
document.write('                  <li class="nav-sub-header">');
document.write('                    <a href>');
document.write('                      <span translate="aside.nav.DASHBOARD">Dashboard</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="app.dashboard-v1">');
document.write('                      <span>添加分类</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="app.dashboard-v2">');
document.write('                      <b class="label bg-info pull-right">N</b>');
document.write('                      <span>添加菜品</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                </ul>');
document.write('              </li>');
document.write('              <li ui-sref-active="active">');
document.write('                <a ui-sref="app.calendar">');
document.write('                  <i class="glyphicon glyphicon-calendar icon text-info-dker"></i>');
document.write('                  <span class="font-bold" translate="aside.nav.CALENDAR">餐桌</span>');
document.write('                </a>');
document.write('              </li>');
document.write('              <li ui-sref-active="active">');
document.write('                <a ui-sref="app.mail.list">');
document.write('                  <b class="badge bg-info pull-right">9</b>');
document.write('                  <i class="glyphicon glyphicon-envelope icon text-info-lter"></i>');
document.write('                  <span class="font-bold" translate="aside.nav.EMAIL">后厨</span>');
document.write('                </a>');
document.write('              </li>');
document.write('              <li>');
document.write('                <a href class="auto">');
document.write('                  <span class="pull-right text-muted">');
document.write('                    <i class="fa fa-fw fa-angle-right text"></i>');
document.write('                    <i class="fa fa-fw fa-angle-down text-active"></i>');
document.write('                  </span>');
document.write('                  <i class="glyphicon glyphicon-th-large icon text-success"></i>');
document.write('                  <span class="font-bold">结算</span>');
document.write('                </a>');
document.write('                <ul class="nav nav-sub dk">');
document.write('                  <li class="nav-sub-header">');
document.write('                    <a href>');
document.write('                      <span>结算</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="apps.note">');
document.write('                      <span>订单结算</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                </ul>');
document.write('              </li>');
document.write('              <li>');
document.write('                <a href class="auto">');
document.write('                  <span class="pull-right text-muted">');
document.write('                    <i class="fa fa-fw fa-angle-right text"></i>');
document.write('                    <i class="fa fa-fw fa-angle-down text-active"></i>');
document.write('                  </span>');
document.write('                  <i class="glyphicon glyphicon-th-large icon text-success"></i>');
document.write('                  <span class="font-bold">设置</span>');
document.write('                </a>');
document.write('                <ul class="nav nav-sub dk">');
document.write('                  <li class="nav-sub-header">');
document.write('                    <a href>');
document.write('                      <span>设置</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="apps.note">');
document.write('                      <span>验证设置</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="apps.contact">');
document.write('                      <span>二维码</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                </ul>');
document.write('              </li>');
document.write('');
document.write('              <li class="line dk"></li>');
document.write('');
document.write('              <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">');
document.write('                <span translate="aside.nav.components.COMPONENTS">Components</span>');
document.write('              </li>');
document.write('              <li>');
document.write('                <a href class="auto">      ');
document.write('                  <span class="pull-right text-muted">');
document.write('                    <i class="fa fa-fw fa-angle-right text"></i>');
document.write('                    <i class="fa fa-fw fa-angle-down text-active"></i>');
document.write('                  </span>');
document.write('                  <b class="badge bg-info pull-right">3</b>');
document.write('                  <i class="glyphicon glyphicon-th"></i>');
document.write('                  <span>预定系统</span>');
document.write('                </a>');
document.write('                <ul class="nav nav-sub dk">');
document.write('                  <li class="nav-sub-header">');
document.write('                    <a href>');
document.write('                      <span>Layout</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="layout.app">');
document.write('                      <span>当日预订</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="layout.fullwidth">');
document.write('                      <span>历史预定</span>');
document.write('                    </a>');
document.write('                  </li>');

document.write('                </ul>');
document.write('              </li>');
document.write('              <li ng-class="{active:$state.includes('+ "'app.ui'"+ ')}">');
document.write('                <a href class="auto">');
document.write('                  <span class="pull-right text-muted">');
document.write('                    <i class="fa fa-fw fa-angle-right text"></i>');
document.write('                    <i class="fa fa-fw fa-angle-down text-active"></i>');
document.write('                  </span>');
document.write('                  <i class="glyphicon glyphicon-briefcase icon"></i>');
document.write('                  <span translate="aside.nav.components.ui_kits.UI_KITS">客户管理</span>');
document.write('                </a>');
document.write('                <ul class="nav nav-sub dk">');
document.write('                  <li class="nav-sub-header">');
document.write('                    <a href>');
document.write('                      <span translate="aside.nav.components.ui_kits.UI_KITS">UI Kits</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="app.ui.timeline">');
document.write('                      <span translate="aside.nav.components.ui_kits.TIMELINE">会员信息</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                </ul>');
document.write('              </li>');
document.write('              <li ng-class="{active:$state.includes(' + "'app.table'"+ ')}">');
document.write('                <a href class="auto">');
document.write('                  <span class="pull-right text-muted">');
document.write('                    <i class="fa fa-fw fa-angle-right text"></i>');
document.write('                    <i class="fa fa-fw fa-angle-down text-active"></i>');
document.write('                  </span>');
document.write('                  <b class="label bg-primary pull-right">2</b>');
document.write('                  <i class="glyphicon glyphicon-list"></i>');
document.write('                  <span translate="aside.nav.components.table.TABLE">数据报表</span>');
document.write('                </a>');
document.write('                <ul class="nav nav-sub dk">');
document.write('                  <li class="nav-sub-header">');
document.write('                    <a href>');
document.write('                      <span translate="aside.nav.components.table.TABLE">Table</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="app.table.static">');
document.write('                      <span translate="aside.nav.components.table.TABLE_STATIC">营业额报表</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="app.table.datatable">');
document.write('                      <span translate="aside.nav.components.table.DATATABLE">菜品类报表</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="app.table.footable">');
document.write('                      <span translate="aside.nav.components.table.FOOTABLE">用餐人数报表</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                </ul>');
document.write('              </li>');
document.write('              <li ng-class="{active:$state.includes('+ "'app.form'"+' )}">');
document.write('                <a href class="auto">');
document.write('                  <span class="pull-right text-muted">');
document.write('                    <i class="fa fa-fw fa-angle-right text"></i>');
document.write('                    <i class="fa fa-fw fa-angle-down text-active"></i>');
document.write('                  </span>');
document.write('                  <i class="glyphicon glyphicon-edit"></i>');
document.write('                  <span translate="aside.nav.components.form.FORM">营销管理</span>');
document.write('                </a>');
document.write('                <ul class="nav nav-sub dk">');
document.write('                  <li class="nav-sub-header">');
document.write('                    <a href>');
document.write('                      <span translate="aside.nav.components.form.FORM">营销管理</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="app.form.elements">');
document.write('                      <span translate="aside.nav.components.form.FORM_ELEMENTS">菜品推荐</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="app.form.elements">');
document.write('                      <span translate="aside.nav.components.form.FORM_ELEMENTS">会员生日策划</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="app.form.validation">');
document.write('                      <span translate="aside.nav.components.form.FORM_VALIDATION">节假日促销</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                </ul>');
document.write('              </li>');
document.write('              <li ng-class="{active:$state.includes('+"'app.page'"+')}">');
document.write('                <a href class="auto">');
document.write('                  <span class="pull-right text-muted">');
document.write('                    <i class="fa fa-fw fa-angle-right text"></i>');
document.write('                    <i class="fa fa-fw fa-angle-down text-active"></i>');
document.write('                  </span>');
document.write('                  <i class="glyphicon glyphicon-signal"></i>');
document.write('                  <span translate="aside.nav.components.pages.PAGES">服务管理</span>');
document.write('                </a>');
document.write('                <ul class="nav nav-sub dk">');
document.write('                  <li class="nav-sub-header">');
document.write('                    <a href>');
document.write('                      <span translate="aside.nav.components.pages.PAGES">服务管理</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="app.page.price">');
document.write('                      <span>服务员管理</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                </ul>');
document.write('              </li>');
document.write('              <li ng-class="{active:$state.includes('+ "'app.page'"+ ')}">');
document.write('                <a href class="auto">');
document.write('                  <span class="pull-right text-muted">');
document.write('                    <i class="fa fa-fw fa-angle-right text"></i>');
document.write('                    <i class="fa fa-fw fa-angle-down text-active"></i>');
document.write('                  </span>');
document.write('                  <i class="glyphicon glyphicon-file icon"></i>');
document.write('                  <span translate="aside.nav.components.pages.PAGES">客户反馈</span>');
document.write('                </a>');
document.write('                <ul class="nav nav-sub dk">');
document.write('                  <li class="nav-sub-header">');
document.write('                    <a href>');
document.write('                      <span translate="aside.nav.components.pages.PAGES">Pages</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                  <li ui-sref-active="active">');
document.write('                    <a ui-sref="app.page.price">');
document.write('                      <span>整体评价</span>');
document.write('                    </a>');
document.write('                  </li>');
document.write('                </ul>');
document.write('              </li>');
document.write('');
document.write('              <li class="line dk hidden-folded"></li>');
document.write('');
document.write('              <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">          ');
document.write('                <span translate="aside.nav.your_stuff.YOUR_STUFF">Your Stuff</span>');
document.write('              </li>  ');
document.write('              <li>');
document.write('                <a ui-sref="app.page.profile">');
document.write('                  <i class="icon-user icon text-success-lter"></i>');
document.write('                  <b class="badge bg-success pull-right">30%</b>');
document.write('                  <span translate="aside.nav.your_stuff.PROFILE">Profile</span>');
document.write('                </a>');
document.write('              </li>');
document.write('              <li>');
document.write('                <a ui-sref="app.docs">');
document.write('                  <i class="icon-question icon"></i>');
document.write('                  <span translate="aside.nav.your_stuff.DOCUMENTS">Documents</span>');
document.write('                </a>');
document.write('              </li>');
document.write('            </ul>');
document.write('          </nav>');
document.write('          <!-- nav -->');
document.write('');
document.write('          <!-- aside footer -->');
document.write('          <div class="wrapper m-t">');
document.write('            <div class="text-center-folded">');
document.write('              <span class="pull-right pull-none-folded">60%</span>');
document.write('              <span class="hidden-folded" translate="aside.MILESTONE">Milestone</span>');
document.write('            </div>');
document.write('            <div class="progress progress-xxs m-t-sm dk">');
document.write('              <div class="progress-bar progress-bar-info" style="width: 60%;">');
document.write('              </div>');
document.write('            </div>');
document.write('            <div class="text-center-folded">');
document.write('              <span class="pull-right pull-none-folded">35%</span>');
document.write('              <span class="hidden-folded" translate="aside.RELEASE">Release</span>');
document.write('            </div>');
document.write('            <div class="progress progress-xxs m-t-sm dk">');
document.write('              <div class="progress-bar progress-bar-primary" style="width: 35%;">');
document.write('              </div>');
document.write('            </div>');
document.write('          </div>');
document.write('          <!-- / aside footer -->');
document.write('        </div>');
document.write('      </div>');
document.write('    </div>');
document.write('    <!-- / menu -->');
document.write('');
document.write('    <!-- content -->');
document.write('    <div class="app-content">');
document.write('    <!-- head end here -->');
document.write('    ');
document.write('    ');
document.write('    ');
