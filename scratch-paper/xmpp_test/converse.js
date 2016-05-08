



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-3403d2cd1238a53420d672e269567929f23ae8a94f67108badff620bcc0dd88e.css" integrity="sha256-NAPSzRI4pTQg1nLiaVZ5KfI66KlPZxCLrf9iC8wN2I4=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-ffb03de56455c4f0e097ace35aafdf560580824725928d80962578ad03d515ef.css" integrity="sha256-/7A95WRVxPDgl6zjWq/fVgWAgkclko2AliV4rQPVFe8=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-8d53a291d725eed1eb92d6049716584477fcb8d67d1f9aff5c248de8246a9f30.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-eb09655327142c1bc703135264aa419c849fefb0f7f6f183a8981317e933b334.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>converse.js/converse.js at master · jcbrand/converse.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars1.githubusercontent.com/u/683911?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jcbrand/converse.js" name="twitter:title" /><meta content="converse.js - Web-based XMPP/Jabber chat client written in javascript" name="twitter:description" />
      <meta content="https://avatars1.githubusercontent.com/u/683911?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="jcbrand/converse.js" property="og:title" /><meta content="https://github.com/jcbrand/converse.js" property="og:url" /><meta content="converse.js - Web-based XMPP/Jabber chat client written in javascript" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/ODU0MzQ3Mzo1ZWE0MmM0ZWNjMjNiODhiMGY0MjhhYjgwYmQ4ZTRiZTowMWYzMTk5NDc4ZDM3YWRiZjRiMTM3YmRmNjMzZDY3OWIwZmRmZGM0YWJlMTc4YjhlZGY1NDBlNzg5YmE5Y2Nk--4a604ed278af3fdbfce59439011af3510bb7f367">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="7168D77B:53FA:118613E9:570F0E43" name="octolytics-dimension-request_id" /><meta content="8543473" name="octolytics-actor-id" /><meta content="EvanHongYousan" name="octolytics-actor-login" /><meta content="d6a19c9058a49886a1b5106812414c4ffde81e564efa6b46cf9e15dfa225d9b4" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="EvanHongYousan">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="ODExMmMzNDM5N2JiMWZiM2NhY2NlN2Y0ZjRhZTc5Mjc3MmU0YmYzNWU4MDNkNDI1ODgwMTlmNTUyZmJiZGNhN3x7InJlbW90ZV9hZGRyZXNzIjoiMTEzLjEwNC4yMTUuMTIzIiwicmVxdWVzdF9pZCI6IjcxNjhENzdCOjUzRkE6MTE4NjEzRTk6NTcwRjBFNDMiLCJ0aW1lc3RhbXAiOjE0NjA2MDQ0ODV9">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="71bff06bee320b2af0a77b225d63c79bac76ea67" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="63a2b7bec0e79d1ab5d3e57d6621afda">
    

      
  <meta name="description" content="converse.js - Web-based XMPP/Jabber chat client written in javascript">
  <meta name="go-import" content="github.com/jcbrand/converse.js git https://github.com/jcbrand/converse.js.git">

  <meta content="683911" name="octolytics-dimension-user_id" /><meta content="jcbrand" name="octolytics-dimension-user_login" /><meta content="5132476" name="octolytics-dimension-repository_id" /><meta content="jcbrand/converse.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5132476" name="octolytics-dimension-repository_network_root_id" /><meta content="jcbrand/converse.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jcbrand/converse.js/commits/master.atom" rel="alternate" title="Recent Commits to converse.js:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/jcbrand/converse.js/blob/master/converse.js" data-pjax-transient>
  </head>


  <body class="logged-in   env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jcbrand/converse.js/search" class="js-site-search-form" data-scoped-search-url="/jcbrand/converse.js/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="notification-changed-v2:8543473" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l0.73-0.58c0.77-0.77 0.81-2.55 1.19-4.42 0.77-3.77 4.08-5 4.08-5 0-0.55 0.45-1 1-1s1 0.45 1 1c0 0 3.39 1.23 4.16 5 0.38 1.88 0.42 3.66 1.19 4.42l0.66 0.58z m-7 4c1.11 0 2-0.89 2-2H5c0 1.11 0.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="jcbrand/converse.js">This repository</span>
  </div>
    <a class="dropdown-item" href="/jcbrand/converse.js/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/EvanHongYousan"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@EvanHongYousan" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/8543473?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">EvanHongYousan</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/EvanHongYousan" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
          <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
            Explore
          </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="71bff06bee320b2af0a77b225d63c79bac76ea67" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nabLy7TCVn2SYc7NB04R3HqCL2dVkw1PQYfE8HhAOeEm7jANGMopdTsEZsnZ3xQFCzhlF9FumkCwygD3Ja1EgQ==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="71bff06bee320b2af0a77b225d63c79bac76ea67" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="H/6sI3+x2HAO4T8/wMW9pFn/iJc6oyhiu1CZxDnEJAs1BvK8C+sCoEBEi2bTVFv1c1mNxIn91081iwvOpOrMFg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="5132476" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/jcbrand/converse.js/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/jcbrand/converse.js/watchers">
            148
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 0.67-0.81 1-1.28 0.53L3 10H1c-0.55 0-1-0.45-1-1V7c0-0.55 0.45-1 1-1h2l3.72-3.72c0.47-0.47 1.28-0.14 1.28 0.53z m7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06 1.97 1.97-1.97 1.97 1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06-1.97-1.97 1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jcbrand/converse.js/unstar" class="js-toggler-form starred" data-form-nonce="71bff06bee320b2af0a77b225d63c79bac76ea67" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ogwZEVkN2cJ70Ud7uQX/MlgVCv5nlB15pooY1a+R/azu3IHTlhNrKDPYv+9w+idi8aAa0AAQRZwZ42K4XnAWCw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar jcbrand/converse.js"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jcbrand/converse.js/stargazers">
          1,452
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jcbrand/converse.js/star" class="js-toggler-form unstarred" data-form-nonce="71bff06bee320b2af0a77b225d63c79bac76ea67" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YZSQtdKogaNDjd/WWfDWJnZGOO4TumF7Q5goIWx/tb3yye+6EVN2C0+9V5jSggRYsA4xtrgBBRMShVQh1v6f6Q==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star jcbrand/converse.js"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/jcbrand/converse.js/stargazers">
          1,452
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jcbrand/converse.js/fork" class="btn-with-count" data-form-nonce="71bff06bee320b2af0a77b225d63c79bac76ea67" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="W1ZhirNoglV+4L3uF6WbAfK9xFAQ+SdA8YP3h74goEEE8TycCYVwZiGbbSCYRWqaXNCG4yZPpC45R8xRcAAzdg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of jcbrand/converse.js to your account"
                aria-label="Fork your own copy of jcbrand/converse.js to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/jcbrand/converse.js/network" class="social-count">
      359
    </a>
  </li>
</ul>

    <h1 class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/jcbrand" class="url fn" rel="author">jcbrand</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/jcbrand/converse.js" data-pjax="#js-repo-pjax-container">converse.js</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jcbrand/converse.js" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jcbrand/converse.js" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/jcbrand/converse.js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jcbrand/converse.js/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">71</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jcbrand/converse.js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /jcbrand/converse.js/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/jcbrand/converse.js/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /jcbrand/converse.js/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      Wiki
</a>
  <a href="/jcbrand/converse.js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /jcbrand/converse.js/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/jcbrand/converse.js/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /jcbrand/converse.js/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/jcbrand/converse.js/blob/d2ee62da71c7f693dbd8beb5acdc4757c936882d/converse.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:3ce159b5296b8f57fb24fe5bd4a15830 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jcbrand/converse.js/blob/0.6.x/converse.js"
               data-name="0.6.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="0.6.x">
                0.6.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jcbrand/converse.js/blob/0.7.x/converse.js"
               data-name="0.7.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="0.7.x">
                0.7.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jcbrand/converse.js/blob/gh-pages/converse.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jcbrand/converse.js/blob/headline/converse.js"
               data-name="headline"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="headline">
                headline
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/jcbrand/converse.js/blob/master/converse.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jcbrand/converse.js/blob/mind/converse.js"
               data-name="mind"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="mind">
                mind
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jcbrand/converse.js/blob/propagate-offline/converse.js"
               data-name="propagate-offline"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="propagate-offline">
                propagate-offline
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jcbrand/converse.js/blob/refactor/converse.js"
               data-name="refactor"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="refactor">
                refactor
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jcbrand/converse.js/blob/send2resource/converse.js"
               data-name="send2resource"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="send2resource">
                send2resource
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jcbrand/converse.js/blob/vcard-info/converse.js"
               data-name="vcard-info"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="vcard-info">
                vcard-info
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jcbrand/converse.js/blob/xhtml_im/converse.js"
               data-name="xhtml_im"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="xhtml_im">
                xhtml_im
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.10.1/converse.js"
              data-name="v0.10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.1">
                v0.10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.10.0/converse.js"
              data-name="v0.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.10.0">
                v0.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.9.6/converse.js"
              data-name="v0.9.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.6">
                v0.9.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.9.5/converse.js"
              data-name="v0.9.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.5">
                v0.9.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.9.4/converse.js"
              data-name="v0.9.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.4">
                v0.9.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.9.3/converse.js"
              data-name="v0.9.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.3">
                v0.9.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.9.2/converse.js"
              data-name="v0.9.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.2">
                v0.9.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.9.1/converse.js"
              data-name="v0.9.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.1">
                v0.9.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.9.0/converse.js"
              data-name="v0.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.0">
                v0.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.8.6/converse.js"
              data-name="v0.8.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.6">
                v0.8.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.8.5/converse.js"
              data-name="v0.8.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.5">
                v0.8.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.8.4/converse.js"
              data-name="v0.8.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.4">
                v0.8.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.8.3/converse.js"
              data-name="v0.8.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.3">
                v0.8.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.8.2/converse.js"
              data-name="v0.8.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.2">
                v0.8.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.8.1/converse.js"
              data-name="v0.8.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.1">
                v0.8.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.8.0/converse.js"
              data-name="v0.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.0">
                v0.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.7.4/converse.js"
              data-name="v0.7.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.4">
                v0.7.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.7.3/converse.js"
              data-name="v0.7.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.3">
                v0.7.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.7.2/converse.js"
              data-name="v0.7.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.2">
                v0.7.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.7.1/converse.js"
              data-name="v0.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.1">
                v0.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.7.0/converse.js"
              data-name="v0.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.0">
                v0.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.6.6/converse.js"
              data-name="v0.6.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.6">
                v0.6.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.6.5/converse.js"
              data-name="v0.6.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.5">
                v0.6.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.6.4/converse.js"
              data-name="v0.6.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.4">
                v0.6.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.6.3/converse.js"
              data-name="v0.6.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.3">
                v0.6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.6.2/converse.js"
              data-name="v0.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.2">
                v0.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.6.1/converse.js"
              data-name="v0.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.1">
                v0.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.6.0/converse.js"
              data-name="v0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.0">
                v0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.5.2/converse.js"
              data-name="v0.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.2">
                v0.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.5.1/converse.js"
              data-name="v0.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.1">
                v0.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.5.0/converse.js"
              data-name="v0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.0">
                v0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.4/converse.js"
              data-name="v0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4">
                v0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.3/converse.js"
              data-name="v0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3">
                v0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/v0.2/converse.js"
              data-name="v0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2">
                v0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jcbrand/converse.js/tree/0.9.4/converse.js"
              data-name="0.9.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.4">
                0.9.4
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/jcbrand/converse.js/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/jcbrand/converse.js"><span>converse.js</span></a></span></span><span class="separator">/</span><strong class="final-path">converse.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/jcbrand/converse.js/commit/a6c3b462378337b01f7c7080272401c765d1cfc7" data-pjax>
          a6c3b46
        </a>
        <time datetime="2016-04-01T12:46:19Z" is="relative-time">Apr 1, 2016</time>
      </span>
      <div>
        <img alt="@jcbrand" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/683911?v=3&amp;s=40" width="20" />
        <a href="/jcbrand" class="user-mention" rel="author">jcbrand</a>
          <a href="/jcbrand/converse.js/commit/a6c3b462378337b01f7c7080272401c765d1cfc7" class="message" data-pjax="true" title="Move the drag-resize code into a separate component.">Move the drag-resize code into a separate component.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>22</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="jcbrand" href="/jcbrand/converse.js/commits/master/converse.js?author=jcbrand"><img alt="@jcbrand" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/683911?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ichim-david" href="/jcbrand/converse.js/commits/master/converse.js?author=ichim-david"><img alt="@ichim-david" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/152852?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="thierrytiti" href="/jcbrand/converse.js/commits/master/converse.js?author=thierrytiti"><img alt="@thierrytiti" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/8554589?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="knixeur" href="/jcbrand/converse.js/commits/master/converse.js?author=knixeur"><img alt="@knixeur" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1289632?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="floriancargoet" href="/jcbrand/converse.js/commits/master/converse.js?author=floriancargoet"><img alt="@floriancargoet" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/110431?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Aupajo" href="/jcbrand/converse.js/commits/master/converse.js?author=Aupajo"><img alt="@Aupajo" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/14123?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="pzia" href="/jcbrand/converse.js/commits/master/converse.js?author=pzia"><img alt="@pzia" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/11092036?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="alecghica" href="/jcbrand/converse.js/commits/master/converse.js?author=alecghica"><img alt="@alecghica" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1176874?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="1st8" href="/jcbrand/converse.js/commits/master/converse.js?author=1st8"><img alt="@1st8" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/646693?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rlanvin" href="/jcbrand/converse.js/commits/master/converse.js?author=rlanvin"><img alt="@rlanvin" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1701590?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Deuteu" href="/jcbrand/converse.js/commits/master/converse.js?author=Deuteu"><img alt="@Deuteu" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/7711220?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="sir-sigurd" href="/jcbrand/converse.js/commits/master/converse.js?author=sir-sigurd"><img alt="@sir-sigurd" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/481910?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="teseo" href="/jcbrand/converse.js/commits/master/converse.js?author=teseo"><img alt="@teseo" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/2123048?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="derek-wangpch" href="/jcbrand/converse.js/commits/master/converse.js?author=derek-wangpch"><img alt="@derek-wangpch" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1270516?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="gromiak" href="/jcbrand/converse.js/commits/master/converse.js?author=gromiak"><img alt="@gromiak" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/615419?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="matheus-morfi" href="/jcbrand/converse.js/commits/master/converse.js?author=matheus-morfi"><img alt="@matheus-morfi" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3265232?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mjnaderi" href="/jcbrand/converse.js/commits/master/converse.js?author=mjnaderi"><img alt="@mjnaderi" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2115303?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="diditopher" href="/jcbrand/converse.js/commits/master/converse.js?author=diditopher"><img alt="@diditopher" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/8645071?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="m0cs" href="/jcbrand/converse.js/commits/master/converse.js?author=m0cs"><img alt="@m0cs" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/7376855?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="seocam" href="/jcbrand/converse.js/commits/master/converse.js?author=seocam"><img alt="@seocam" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/33388?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="andreabenini" href="/jcbrand/converse.js/commits/master/converse.js?author=andreabenini"><img alt="@andreabenini" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/9632086?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="witekdev" href="/jcbrand/converse.js/commits/master/converse.js?author=witekdev"><img alt="@witekdev" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/883619?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@jcbrand" height="24" src="https://avatars3.githubusercontent.com/u/683911?v=3&amp;s=48" width="24" />
            <a href="/jcbrand">jcbrand</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ichim-david" height="24" src="https://avatars1.githubusercontent.com/u/152852?v=3&amp;s=48" width="24" />
            <a href="/ichim-david">ichim-david</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@thierrytiti" height="24" src="https://avatars1.githubusercontent.com/u/8554589?v=3&amp;s=48" width="24" />
            <a href="/thierrytiti">thierrytiti</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@knixeur" height="24" src="https://avatars3.githubusercontent.com/u/1289632?v=3&amp;s=48" width="24" />
            <a href="/knixeur">knixeur</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@floriancargoet" height="24" src="https://avatars0.githubusercontent.com/u/110431?v=3&amp;s=48" width="24" />
            <a href="/floriancargoet">floriancargoet</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Aupajo" height="24" src="https://avatars1.githubusercontent.com/u/14123?v=3&amp;s=48" width="24" />
            <a href="/Aupajo">Aupajo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@pzia" height="24" src="https://avatars3.githubusercontent.com/u/11092036?v=3&amp;s=48" width="24" />
            <a href="/pzia">pzia</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@alecghica" height="24" src="https://avatars2.githubusercontent.com/u/1176874?v=3&amp;s=48" width="24" />
            <a href="/alecghica">alecghica</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@1st8" height="24" src="https://avatars0.githubusercontent.com/u/646693?v=3&amp;s=48" width="24" />
            <a href="/1st8">1st8</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rlanvin" height="24" src="https://avatars2.githubusercontent.com/u/1701590?v=3&amp;s=48" width="24" />
            <a href="/rlanvin">rlanvin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Deuteu" height="24" src="https://avatars3.githubusercontent.com/u/7711220?v=3&amp;s=48" width="24" />
            <a href="/Deuteu">Deuteu</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@sir-sigurd" height="24" src="https://avatars3.githubusercontent.com/u/481910?v=3&amp;s=48" width="24" />
            <a href="/sir-sigurd">sir-sigurd</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@teseo" height="24" src="https://avatars3.githubusercontent.com/u/2123048?v=3&amp;s=48" width="24" />
            <a href="/teseo">teseo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@derek-wangpch" height="24" src="https://avatars2.githubusercontent.com/u/1270516?v=3&amp;s=48" width="24" />
            <a href="/derek-wangpch">derek-wangpch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gromiak" height="24" src="https://avatars0.githubusercontent.com/u/615419?v=3&amp;s=48" width="24" />
            <a href="/gromiak">gromiak</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@matheus-morfi" height="24" src="https://avatars0.githubusercontent.com/u/3265232?v=3&amp;s=48" width="24" />
            <a href="/matheus-morfi">matheus-morfi</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mjnaderi" height="24" src="https://avatars0.githubusercontent.com/u/2115303?v=3&amp;s=48" width="24" />
            <a href="/mjnaderi">mjnaderi</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@diditopher" height="24" src="https://avatars1.githubusercontent.com/u/8645071?v=3&amp;s=48" width="24" />
            <a href="/diditopher">diditopher</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@m0cs" height="24" src="https://avatars0.githubusercontent.com/u/7376855?v=3&amp;s=48" width="24" />
            <a href="/m0cs">m0cs</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@seocam" height="24" src="https://avatars0.githubusercontent.com/u/33388?v=3&amp;s=48" width="24" />
            <a href="/seocam">seocam</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@andreabenini" height="24" src="https://avatars3.githubusercontent.com/u/9632086?v=3&amp;s=48" width="24" />
            <a href="/andreabenini">andreabenini</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@witekdev" height="24" src="https://avatars3.githubusercontent.com/u/883619?v=3&amp;s=48" width="24" />
            <a href="/witekdev">witekdev</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/jcbrand/converse.js/raw/master/converse.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/jcbrand/converse.js/blame/master/converse.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/jcbrand/converse.js/commits/master/converse.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/jcbrand/converse.js?branch=master&amp;filepath=converse.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h5.34c-0.25 0.61-0.86 1.39-2.34 2h8c-1.48-0.61-2.09-1.39-2.34-2h5.34c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1z m0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jcbrand/converse.js/edit/master/converse.js" class="inline-form js-update-url-with-hash" data-form-nonce="71bff06bee320b2af0a77b225d63c79bac76ea67" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nnHpgM39o7zqWMV8GIJUICn1iawZvERtK5ssPjim1kC1fN+yMbP4gqYza+bDoqI1G6Trj+iV+sCifxth129m8w==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jcbrand/converse.js/delete/master/converse.js" class="inline-form" data-form-nonce="71bff06bee320b2af0a77b225d63c79bac76ea67" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vRTNIOlaWa6toKbrzhituyoV8peDM4NPFrgxk7otWcbBpCdJKrxgPi27KwFBW1QH/Y1TlBafIXOFSfc0n23VvA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M10 2H8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1H1c-0.55 0-1 0.45-1 1v1c0 0.55 0.45 1 1 1v9c0 0.55 0.45 1 1 1h7c0.55 0 1-0.45 1-1V5c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1z m-1 12H2V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9z m1-10H1v-1h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      256 lines (241 sloc)
      <span class="file-info-divider"></span>
    13.3 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> config;</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">typeof</span>(require) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/* XXX: Hack to work around r.js&#39;s stupid parsing.</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * We want to save the configuration in a variable so that we can reuse it in</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * tests/main.js.</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">    require <span class="pl-k">=</span> { <span class="pl-c">// jshint ignore:line</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">config</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">c</span>) {</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">            config <span class="pl-k">=</span> c;</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">require</span>.<span class="pl-en">config</span>({</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    baseUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    paths<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>backbone<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                 <span class="pl-s"><span class="pl-pds">&quot;</span>components/backbone/backbone<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>backbone.browserStorage<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>  <span class="pl-s"><span class="pl-pds">&quot;</span>components/backbone.browserStorage/backbone.browserStorage<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>backbone.overview<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/backbone.overview/backbone.overview<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>eventemitter<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>components/otr/build/dep/eventemitter<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>jquery<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                   <span class="pl-s"><span class="pl-pds">&quot;</span>components/jquery/dist/jquery<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>jquery-private<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>           <span class="pl-s"><span class="pl-pds">&quot;</span>src/jquery-private<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>jquery.browser<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>           <span class="pl-s"><span class="pl-pds">&quot;</span>components/jquery.browser/dist/jquery.browser<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>jquery.easing<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>components/jquery-easing-original/index<span class="pl-pds">&quot;</span></span>,          <span class="pl-c">// XXX: Only required for https://conversejs.org website</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>moment<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                   <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/moment<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                  <span class="pl-s"><span class="pl-pds">&quot;</span>components/strophejs/src/wrapper<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe-base64<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>           <span class="pl-s"><span class="pl-pds">&quot;</span>components/strophejs/src/base64<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe-bosh<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>components/strophejs/src/bosh<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe-core<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>components/strophejs/src/core<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe-md5<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>              <span class="pl-s"><span class="pl-pds">&quot;</span>components/strophejs/src/md5<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe-polyfill<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>         <span class="pl-s"><span class="pl-pds">&quot;</span>components/strophejs/src/polyfills<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe-sha1<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>components/strophejs/src/sha1<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe-utils<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>components/strophejs/src/utils<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe-websocket<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/strophejs/src/websocket<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe.disco<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>components/strophejs-plugins/disco/strophe.disco<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe.ping<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>src/strophe.ping<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe.rsm<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>              <span class="pl-s"><span class="pl-pds">&quot;</span>components/strophejs-plugins/rsm/strophe.rsm<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>strophe.vcard<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>src/strophe.vcard<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                     <span class="pl-s"><span class="pl-pds">&#39;</span>components/requirejs-text/text<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>tpl<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                      <span class="pl-s"><span class="pl-pds">&#39;</span>components/requirejs-tpl-jcbrand/tpl<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>typeahead<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                <span class="pl-s"><span class="pl-pds">&quot;</span>components/typeahead.js/index<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>underscore<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>               <span class="pl-s"><span class="pl-pds">&quot;</span>components/underscore/underscore<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>utils<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                    <span class="pl-s"><span class="pl-pds">&quot;</span>src/utils<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>polyfill<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                 <span class="pl-s"><span class="pl-pds">&quot;</span>src/polyfill<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Converse</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-api<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-api<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-chatview<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-chatview<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-controlbox<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-controlbox<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-core<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-core<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-dragresize<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-dragresize<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-headline<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-headline<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-mam<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-mam<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-minimize<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-minimize<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-muc<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-muc<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-notification<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-notification<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-otr<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-otr<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-ping<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-ping<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-register<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-register<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-rosterview<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-rosterview<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-templates<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-templates<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-vcard<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>           <span class="pl-s"><span class="pl-pds">&quot;</span>src/converse-vcard<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Off-the-record-encryption</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>bigint<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>               <span class="pl-s"><span class="pl-pds">&quot;</span>src/bigint<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>crypto<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>               <span class="pl-s"><span class="pl-pds">&quot;</span>src/crypto<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>crypto.aes<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>           <span class="pl-s"><span class="pl-pds">&quot;</span>components/otr/vendor/cryptojs/aes<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>crypto.cipher-core<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&quot;</span>components/otr/vendor/cryptojs/cipher-core<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>crypto.core<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>          <span class="pl-s"><span class="pl-pds">&quot;</span>components/otr/vendor/cryptojs/core<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>crypto.enc-base64<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&quot;</span>components/otr/vendor/cryptojs/enc-base64<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>crypto.evpkdf<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/crypto-js-evanvosberg/src/evpkdf<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>crypto.hmac<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>          <span class="pl-s"><span class="pl-pds">&quot;</span>components/otr/vendor/cryptojs/hmac<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>crypto.md5<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>           <span class="pl-s"><span class="pl-pds">&quot;</span>components/crypto-js-evanvosberg/src/md5<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>crypto.mode-ctr<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&quot;</span>components/otr/vendor/cryptojs/mode-ctr<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>crypto.pad-nopadding<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>components/otr/vendor/cryptojs/pad-nopadding<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>crypto.sha1<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>          <span class="pl-s"><span class="pl-pds">&quot;</span>components/otr/vendor/cryptojs/sha1<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>crypto.sha256<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/otr/vendor/cryptojs/sha256<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>salsa20<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>              <span class="pl-s"><span class="pl-pds">&quot;</span>components/otr/build/dep/salsa20<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>otr<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                  <span class="pl-s"><span class="pl-pds">&quot;</span>src/otr<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Locales paths</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>locales<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&quot;</span>src/locales<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>jed<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&quot;</span>components/jed/jed<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>af<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/af/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>de<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/de/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>en<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/en/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>es<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/es/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>fr<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/fr/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>he<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/he/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>hu<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/hu/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/id/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>it<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/it/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>ja<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/ja/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>nb<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/nb/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>nl<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/nl/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>pl<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/pl/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>pt_BR<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>     <span class="pl-s"><span class="pl-pds">&quot;</span>locale/pt_BR/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>ru<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/ru/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>uk<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/uk/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>zh<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>locale/zh/LC_MESSAGES/converse.json<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>moment_with_locales<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>src/moment_locales<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_af<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/af<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_de<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/de<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_es<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/es<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_fr<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/fr<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_he<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/he<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_hu<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/hu<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_id<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/id<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_it<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/it<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_ja<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/ja<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_nb<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/nb<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_nl<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/nl<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_pl<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/pl<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_pt-br<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>     <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/pt-br<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_ru<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/ru<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_uk<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/uk<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>moment_zh<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>components/momentjs/locale/zh-cn<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Templates</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>action<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                   <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/action<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>add_contact_dropdown<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>     <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/add_contact_dropdown<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>add_contact_form<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>         <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/add_contact_form<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>change_status_message<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>    <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/change_status_message<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>chat_status<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>              <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/chat_status<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>chatarea<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                 <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/chatarea<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>chatbox<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                  <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/chatbox<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>chatroom<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                 <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/chatroom<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>chatroom_form<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/chatroom_form<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>chatroom_password_form<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>   <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/chatroom_password_form<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>chatroom_sidebar<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>         <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/chatroom_sidebar<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>chatrooms_tab<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/chatrooms_tab<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>chats_panel<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>              <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/chats_panel<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>choose_status<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/choose_status<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>contacts_panel<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>           <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/contacts_panel<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>contacts_tab<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/contacts_tab<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>controlbox<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>               <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/controlbox<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>controlbox_toggle<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/controlbox_toggle<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>field<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                    <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/field<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>form_captcha<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/form_captcha<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>form_checkbox<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/form_checkbox<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>form_input<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>               <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/form_input<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>form_select<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>              <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/form_select<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>form_textarea<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/form_textarea<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>form_username<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/form_username<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>group_header<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/group_header<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>info<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                     <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/info<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>login_panel<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>              <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/login_panel<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>login_tab<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/login_tab<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>message<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                  <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/message<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>new_day<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                  <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/new_day<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>occupant<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                 <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/occupant<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>pending_contact<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>          <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/pending_contact<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>pending_contacts<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>         <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/pending_contacts<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>register_panel<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>           <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/register_panel<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>register_tab<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/register_tab<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>registration_form<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>        <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/registration_form<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>registration_request<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>     <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/registration_request<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>requesting_contact<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>       <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/requesting_contact<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>requesting_contacts<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/requesting_contacts<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>room_description<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>         <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/room_description<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>room_item<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/room_item<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>room_panel<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>               <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/room_panel<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>roster<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                   <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/roster<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>roster_item<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>              <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/roster_item<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>search_contact<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>           <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/search_contact<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>select_option<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/select_option<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>status_option<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>            <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/status_option<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>toggle_chats<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/toggle_chats<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>toolbar<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                  <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/toolbar<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>toolbar_otr<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>              <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/toolbar_otr<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>trimmed_chat<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>             <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/trimmed_chat<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>vcard<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>                    <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/vcard<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>chatbox_minimize<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>         <span class="pl-s"><span class="pl-pds">&quot;</span>src/templates/chatbox_minimize<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">    map<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// &#39;*&#39; means all modules will get &#39;jquery-private&#39;</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// for their &#39;jquery&#39; dependency.</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> { <span class="pl-s"><span class="pl-pds">&#39;</span>jquery<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>jquery-private<span class="pl-pds">&#39;</span></span> },</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// &#39;jquery-private&#39; wants the real jQuery module</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// though. If this line was not here, there would</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// be an unresolvable cyclic dependency.</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>jquery-private<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> { <span class="pl-s"><span class="pl-pds">&#39;</span>jquery<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>jquery<span class="pl-pds">&#39;</span></span> }</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">    tpl<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Configuration for requirejs-tpl</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Use Mustache style syntax for variable interpolation</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">        templateSettings<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">            evaluate <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\{\[</span>(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">+?</span>)<span class="pl-cce">\]\}</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">            interpolate <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\{\{</span>(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">+?</span>)<span class="pl-cce">\}\}</span><span class="pl-pds">/</span>g</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// define module dependencies for modules not using define</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">    shim<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>crypto.aes<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>           { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>crypto.cipher-core<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>crypto.cipher-core<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>   { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>crypto.enc-base64<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>crypto.evpkdf<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>crypto.enc-base64<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>    { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>crypto.core<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>crypto.evpkdf<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>crypto.md5<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>crypto.hmac<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>          { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>crypto.core<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>crypto.md5<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>           { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>crypto.core<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>crypto.mode-ctr<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>      { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>crypto.cipher-core<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>crypto.pad-nopadding<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>crypto.cipher-core<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>crypto.sha1<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>          { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>crypto.core<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>crypto.sha256<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>crypto.core<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>bigint<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>               { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>crypto<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>strophe.ping<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>         { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>strophe<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>strophe.register<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>     { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>strophe<span class="pl-pds">&#39;</span></span>] },</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>strophe.vcard<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>        { deps<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>strophe<span class="pl-pds">&#39;</span></span>] }</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">});</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/* Converse.js components configuration</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * This file is used to tell require.js which components (or plugins) to load</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * when it generates a build.</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">typeof</span> define <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/* When running tests, define is not defined. */</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">define</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>converse<span class="pl-pds">&quot;</span></span>, [</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>jquery<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-api<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/* START: Removable components</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        * --------------------</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        * Any of the following components may be removed if they&#39;re not needed.</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        */</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>locales<span class="pl-pds">&quot;</span></span>,              <span class="pl-c">// Translations for converse.js. This line can be removed</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">                                <span class="pl-c">// to remove *all* translations, or you can modify the</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">                                <span class="pl-c">// file src/locales.js to include only those</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">                                <span class="pl-c">// translations that you care about.</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-chatview<span class="pl-pds">&quot;</span></span>,    <span class="pl-c">// Renders standalone chat boxes for single user chat</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-mam<span class="pl-pds">&quot;</span></span>,         <span class="pl-c">// XEP-0313 Message Archive Management</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-muc<span class="pl-pds">&quot;</span></span>,         <span class="pl-c">// XEP-0045 Multi-user chat</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-vcard<span class="pl-pds">&quot;</span></span>,       <span class="pl-c">// XEP-0054 VCard-temp</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-otr<span class="pl-pds">&quot;</span></span>,         <span class="pl-c">// Off-the-record encryption for one-on-one messages</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-controlbox<span class="pl-pds">&quot;</span></span>,  <span class="pl-c">// The control box</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-register<span class="pl-pds">&quot;</span></span>,    <span class="pl-c">// XEP-0077 In-band registration</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-ping<span class="pl-pds">&quot;</span></span>,        <span class="pl-c">// XEP-0199 XMPP Ping</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-notification<span class="pl-pds">&quot;</span></span>,<span class="pl-c">// HTML5 Notifications</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-minimize<span class="pl-pds">&quot;</span></span>,    <span class="pl-c">// Allows chat boxes to be minimized</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-dragresize<span class="pl-pds">&quot;</span></span>,  <span class="pl-c">// Allows chat boxes to be resized by dragging them</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>converse-headline<span class="pl-pds">&quot;</span></span>,    <span class="pl-c">// Support for headline messages</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/* END: Removable components */</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">    ], <span class="pl-k">function</span>(<span class="pl-smi">$</span>, <span class="pl-smi">converse_api</span>) {</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">window</span>.<span class="pl-smi">converse</span> <span class="pl-k">=</span> converse_api;</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>converse-loaded<span class="pl-pds">&#39;</span></span>, converse_api);</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> converse_api;</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" title="GitHub " version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.16221s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-jVOikdcl7tHrktYElxZYRHf8uNZ9H5r/XCSN6CRqnzA=" src="https://assets-cdn.github.com/assets/frameworks-8d53a291d725eed1eb92d6049716584477fcb8d67d1f9aff5c248de8246a9f30.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-6wllUycULBvHAxNSZKpBnISf77D39vGDqJgTF+kzszQ=" src="https://assets-cdn.github.com/assets/github-eb09655327142c1bc703135264aa419c849fefb0f7f6f183a8981317e933b334.js"></script>
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

