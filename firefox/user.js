// Disable the smaller search engine suggestion prompt
user_pref("browser.urlbar.update1", false);

// Enable smooth edge like scrolling
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 120);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 0.4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
user_pref("mousewheel.min_line_scroll_amount", 22);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
user_pref("apz.frame_delay.enabled", false);

// Disable Pocket
user_pref("extensions.pocket.enabled", false);

// Enable userchrome stylesheets
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Turn off the about:config warning prompt
user_pref("browser.aboutConfig.showWarning", false);

// Show compact mode option in the GUI
user_pref("browser.compactmode.show", true);

// Hide VPN banner
user_pref("browser.contentblocking.report.hide_vpn_banner", true);

// Enable cycling through recent tabs with Ctrl+Tab
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

// Set dark mode display background color to black
user_pref("browser.display.background_color.dark", "#000000");

// Disable sudden white flashes in dark mode (may not always work)
user_pref("browser.display.use_system_colors", false);
user_pref("browser.download.panel.shown", true);
user_pref("browser.engagement.ctrlTab.has-used", true);
user_pref("browser.engagement.downloads-button.has-used", true);
user_pref("browser.engagement.fxa-toolbar-menu-button.has-used", true);
user_pref("browser.engagement.home-button.has-used", true);
user_pref("browser.engagement.sidebar-button.has-used", true);

// Disable top stories in the new tab page
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Disable visited sites in the new tab page
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);

// Disable sponsored sites in new tab page
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Show Mozilla snippets info in new tab page
// user_pref("browser.newtabpage.activity-stream.feeds.snippets", true);

// Set Proton toolbar version
user_pref("browser.proton.toolbar.version", 3);

// Disable default browser checks
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.shell.defaultBrowserCheckCount", 1);
user_pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", true);

// Turn off the titlebar
user_pref("browser.tabs.inTitlebar", 1);

// Never show the bookmark bar
user_pref("browser.toolbars.bookmarks.visibility", "newtab");

// Turn off auto touchmode
user_pref("browser.touchmode.auto", false);

// Enable Compact Density mode
user_pref("browser.uidensity", 1);

// Enable math calculations in the URL bar
user_pref("browser.urlbar.suggest.calculator", true);

// Disable topsites view in the URL bar to prevent it from expanding on mouse click
user_pref("browser.urlbar.suggest.topsites", false);

// Enable devtools
user_pref("devtools.chrome.enabled", true);

// Enable remote debugger for browser toolbox
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.everOpened", true);

// Enable findbar highlight all option
user_pref("findbar.highlightAll", true);

// Disable first time picture-in-picture toggle button
user_pref("media.videocontrols.picture-in-picture.video-toggle.has-used", true);

// Set picture-in-picture button position
user_pref("media.videocontrols.picture-in-picture.video-toggle.position", "top");

// Enable dark theme
user_pref("ui.systemUsesDarkTheme", 1);

// HTML5 web alerts follow system flyouts
user_pref("alerts.useSystemBackend", true);

// Use green color for secure site padlock icon
user_pref("security.secure_connection_icon_color_gray", false);

// Disable *beep* sound when searching in page
user_pref("accessibility.typeaheadfind.enablesound", false);

// Disable full-screen alert
user_pref("full-screen-api.warning.timeout", 0);

// Disable popping-up Menu bar by pressing the Alt key
user_pref("ui.key.menuAccessKeyFocuses", false);

// Change scrollbar style
user_pref("widget.non-native-theme.scrollbar.style", 3);

// Disable quick find
user_pref("accessibility.typeaheadfind.manual", false);
