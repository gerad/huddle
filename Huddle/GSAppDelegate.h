//
//  GSAppDelegate.h
//  Huddle
//
//  Created by Gerad Suyderhoud on 3/8/14.
//  Copyright (c) 2014 Gerad Suyderhoud. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <WebKit/WebKit.h>

@interface GSAppDelegate : NSObject <NSApplicationDelegate>

@property (assign) IBOutlet NSWindow *window;
@property (assign) IBOutlet WebView *webview;

@end
