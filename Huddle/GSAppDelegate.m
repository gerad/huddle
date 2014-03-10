//
//  GSAppDelegate.m
//  Huddle
//
//  Created by Gerad Suyderhoud on 3/8/14.
//  Copyright (c) 2014 Gerad Suyderhoud. All rights reserved.
//

#import "GSAppDelegate.h"

@implementation GSAppDelegate

- (void)applicationDidFinishLaunching:(NSNotification *)aNotification
{
  [[self webview] setFrameLoadDelegate:self];
  [[self webview] setUIDelegate:self];
  [[self webview] setMainFrameURL:@"https://www.google.com/calendar/render"];
}

- (void)webView:(WebView *)sender didFinishLoadForFrame:(WebFrame *)frame
{
  if (frame != [[self webview] mainFrame]) { return; }
  NSString *url = [[self webview] mainFrameURL];
  if ([url hasPrefix:@"https://www.google.com/calendar/render"]) {
    [self runjs:@"calendar"];
  } else if ([url hasPrefix:@"https://plus.google.com/hangouts"]) {
    [self runjs:@"hangout"];
  }
}

- (void)runjs:(NSString *)name
{
  [[self webview] stringByEvaluatingJavaScriptFromString:[self js:name]];
}

- (NSString *)js:(NSString *)name
{
  NSError *err = nil;
  NSString *path = [[NSBundle mainBundle] pathForResource:name ofType:@"js" inDirectory:@"js"];
  return [NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:&err];
}

// requests to load new windows open in the same window
- (WebView *)webView:(WebView *)sender createWebViewWithRequest:(NSURLRequest *)request
{
  return sender;
}


@end
