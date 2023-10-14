// Smaller search engine suggestion prompt
user_pref("browser.urlbar.update1", false);

// Smooth edge like scrolling:
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

// Full screen fade faster:
//user_pref("full-screen-api.transition-duration.enter", "50 50");
//user_pref("full-screen-api.transition-duration.leave", "50 50");

// Disable pocket
user_pref("extensions.pocket.enabled", false);

// Enable userchrome stylesheets
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Turn off about config warning prompt
user_pref("browser.aboutConfig.showWarning", false);

// Show compact mode option in GUI
user_pref("browser.compactmode.show", true);

// Hide vpn banner
user_pref("browser.contentblocking.report.hide_vpn_banner", true);

// ctrl+tab will cycle through recent tabs
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

// Dark mode display bgcolor set to black
user_pref("browser.display.background_color.dark", "#000000");

// prevent sudden white flashes in dark mode by disabling this. Might not always work
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
user_pref(
	"browser.newtabpage.activity-stream.section.highlights.includeVisited",
	false
);

// Disable sponsored sites in newtabpage
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// show mozilla snippets info in newtabpage
//user_pref("browser.newtabpage.activity-stream.feeds.snippets",	true);

// Proton toolbar version
user_pref("browser.proton.toolbar.version", 3);

// Disable default browser checks
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.shell.defaultBrowserCheckCount", 1);
user_pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", true);

// titlebar off
user_pref("browser.tabs.inTitlebar", 1);

// Never show bookmark bar
user_pref("browser.toolbars.bookmarks.visibility", "never");

// Auto touchmode off
user_pref("browser.touchmode.auto", false);

// Enable Compact Density mode
user_pref("browser.uidensity", 1);

// Enable math calcs in url bar
user_pref("browser.urlbar.suggest.calculator", true);

// Disable topsites view in url bar. This prevents url bar from expanding on mouse click
user_pref("browser.urlbar.suggest.topsites", false);

// Enable devtools
user_pref("devtools.chrome.enabled", true);

// Enable remote debugger for browser toolbox
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.everOpened", true);

// Findbar enable highlightall option
user_pref("findbar.highlightAll", true);

// set default font
// user_pref("font.name.serif.x-western", "Segoe UI Variable Small");

// Disbale first time pip toggle button
user_pref("media.videocontrols.picture-in-picture.video-toggle.has-used", true);

// Set pip button position
user_pref(
	"media.videocontrols.picture-in-picture.video-toggle.position",
	"top"
);

// Enable dark theme
user_pref("ui.systemUsesDarkTheme", 1);

// HTML5 web alerts follow system flyouts
user_pref("alerts.useSystemBackend", true);

// Green color secure site padlock icon
user_pref("security.secure_connection_icon_color_gray", false);

// Disable *beep* sound when searching in page
user_pref("accessibility.typeaheadfind.enablesound", false);

// Disable full-screen alert
user_pref("full-screen-api.warning.timeout", 0);

// Disable popping-up Menu bar by pressing the Alt key
user_pref("ui.key.menuAccessKeyFocuses", false);
