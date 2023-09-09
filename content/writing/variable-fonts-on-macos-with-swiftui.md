+++
title = "Variable fonts on macOS with SwiftUI"
description = "How to add variable font support in a SwiftUI project for mac."
date = "2023-09-08T17:19:00+02:00"
draft = false
+++

# Variable fonts on macOS with SwiftUI

[Go to the solution](#using-the-font).

While working on a menu bar app for macOS using SwiftUI, I wanted to use [Inter](https://rsms.me/inter/) as the typeface for the UI. I'm an amateur type nerd, and have been following the recent development of [variable fonts](https://en.wikipedia.org/wiki/Variable_font) and wanted to try it out on my menu bar app.

Unfortunately support for variable fonts within SwiftUI is already difficult. Trying to find documentation, examples, or Stack Overflow answers on how to add support on a macOS app are non-existent. This post will hopefully serve as a reference for me and anyone else looking to use variable fonts in their macOS apps.

I'm writing this using Xcode 14.3.1, Swift 5.8.1, and SwiftUI 5.

## Typefaces, fonts, and styles

Before the advent of variable fonts, type designers created distinct styles (fonts) of a typeface using combinations of weight, width, and angle. Type designers drew these by hand, and each font was static and couldn't be changed unless they were redrawn. A great of this is Adrian Frutiger's Univers, which is a large family of fonts including weights from light to extra black, oblique glyphs, and width from condensed to extended. 

<figure>
  <img alt="Adrian Frutiger's Univers typeface, laid out as a chart with weight on the y-axis and width on the x-axis. Oblique fonts are grouped with their weight/width counterpart" src="https://res.cloudinary.com/beardfury/image/upload/c_scale,fl_fast_scale.progressive,w_500/v1694261240/writing/variable-fonts-on-macos-with-swiftui/univers-typeface.jpg" style="max-width: 100%;">
  <figcaption>Univers laid out in a grid based on weight and width</figcaption>
</figure>

With variable fonts, however, type designers cede a certain amount of control to users, allowing them to use any value between a minimum and maximum for characteristics like weight, slant, width, and more. Type designers still create several styles of a typeface and use software to allow interpolation of values between the hand-drawn styles.

Variable fonts have a few benefits over regular fonts. Namely, everything is combined into a single font file to be installed or downloaded by users. When using several weights and styles, the variable font file also tends to be smaller than the combined font files required for all the weights and styles used. For applications and websites, having less to download is always better.

## Using variable fonts on macOS

There are a handful of stack overflow questions and answers about using variable fonts on iOS. `UIFont` seems to have slightly better ergonomics than `NSFont`, and translating between the two isn't straightforward, and even getting Xcode to bundle and make your fonts available seems to be much easier for iOS than macOS. Assistance, guidance, or documentation for variable fonts don't exist for modern SwiftUI projects.

### Adding the font

This turned out to be one of the more tricky parts, since Apple's [official documentation](https://developer.apple.com/documentation/swiftui/applying-custom-fonts-to-text) seems to be wrong. Instead, Sarah Reichelt (Troz) wrote a wonderfully helpful article about using [custom fonts in iOS and macOS apps](https://troz.net/post/2020/custom-fonts/). Following the instructions for macOS there, I finally got the font to be bundled with the app and usable from code without having it installed on my system.

### Using the font

Using a custom font in your UI out of the box is already un-ergonomic, as you have to declare the font name every time with `.custom("Custom Font Name")`, which gets old, fast. The first step is to add a `Font` extension to use your custom font. Since I'm using Inter for my UI, I created a static function to abstract away the need for the `Font.custom()` function.

```swift
public extension Font {
    static func inter(_ size: CGFloat) -> Font {
        return Font(.custom("Inter", size: size))
    }
}
```

With that, I could write code like `Text("Hello").font(.inter(16))` and be done. This solution doesn't allow me to actually create variations of the typeface, and this is where the main problem lies.

With variable fonts in Swift, creating variants relies on a [generally undocumented](https://developer.apple.com/documentation/appkit/nsfontdescriptor/attributename/1469860-variation) system of axes. Instead, I relied on an open source project from [mrvsahan](https://github.com/mrvsahan) called [VariableFontExample](https://github.com/mrvsahan/VariableFontExample), which has a demo application to use variable fonts. The app was written for an older version of swift using storyboards, so I still couldn't copy and paste their example code for my app.

Trying to parse Apple's documentation and following what `mrvsahan` was doing with their project, I ended up with the following code for using Inter with variations.

```swift
public enum FontVariations: Int, CustomStringConvertible {
    // Magic numbers for the various axes available for variable font control
    case weight = 2003265652
    case width = 2003072104
    case opticalSize = 1869640570
    case grad = 1196572996
    case slant = 1936486004
    case xtra = 1481921089
    case xopq = 1481592913
    case yopq = 1498370129
    case ytlc = 1498696771
    case ytuc = 1498699075
    case ytas = 1498693971
    case ytde = 1498694725
    case ytfi = 1498695241

    public var description: String {
        switch self {
        case .weight:
            return "Weight"
        case .width:
            return "Width"
        case .opticalSize:
            return "Optical Size"
        case .grad:
            return "Grad"
        case .slant:
            return "Slant"
        case .xtra:
            return "Xtra"
        case .xopq:
            return "Xopq"
        case .yopq:
            return "Yopq"
        case .ytlc:
            return "Ytlc"
        case .ytuc:
            return "Ytuc"
        case .ytas:
            return "Ytas"
        case .ytde:
            return "Ytde"
        case .ytfi:
            return "Ytfi"
        }
    }
}

public extension Font {
    static func inter(_ size: CGFloat, axis: [FontVariations: Double] = [:]) -> Font {
        // Transform the incoming axis map, which uses the enum for the axis to a type of `[Int: Double]`
        // which is what `NSFontDescriptor` requires.
        let intAxis: [Int: Double] = .init(uniqueKeysWithValues: axis.map { (key, value) in
            return (key.rawValue, value)
        })
        let fontDescriptor = NSFontDescriptor(fontAttributes: [
            .name: "Inter",
            .variation: intAxis
        ])
        return Font(.init(fontDescriptor, size: size))
    }
}
```

From my application code, the developer UX is pretty clear thanks to Swift's enum shorthand syntax. The following code would be slightly heavier than the "Regular" variant of Inter, but not *quite* "Medium".

```swift
Text("Hello")
  .font(.inter(24, [.weight: 478]))
```

You could simplify this even further for a design system by adding more static functions to your `Font` extension. `interLight`, `interRegular`, `interItalic`, etc., would all allow you to avoid having to pass in the axes dictionary every time. There are plenty of ways to abstract that, and also abstract a type size scale at the same time.

Hopefully this helps you with variable fonts on macOS, and if you have any feedback, please let me know!