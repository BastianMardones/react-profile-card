# Checkpoint answers

1. **Default flex direction:** React Native uses `column`, so children are arranged vertically by default. A flex container on the web defaults to `row`; web elements do not all use Flexbox automatically.

2. **Alignment:** `justifyContent` distributes children along the main axis, while `alignItems` aligns them along the cross axis. In a row those axes are horizontal and vertical, respectively; in a column they are reversed.

3. **Flex:** In a row, `flex: 1` makes an item grow and share available space with other flexible siblings; equal flex values create equal columns here. On the outermost screen View it fills the available parent space, provided the parent has a defined size.

4. **Image resizing:** `cover` preserves the image's aspect ratio and fills its frame, cropping any overflow. `contain` preserves the whole image inside the frame, potentially leaving empty space.

5. **StyleSheet:** `StyleSheet.create` keeps named styles separate from the JSX, making the component easier to read and styles easier to reuse. It also supports editor checking of native style properties; it should not be described as automatically making every render faster.

6. **Shadows:** The traditional `shadowOffset`, `shadowOpacity` and `shadowRadius` properties are iOS-specific, so that recipe alone does not create an Android shadow. This task uses `Platform.select` with `elevation` on Android; `shadowColor` can customize the shadow color on Android API 28+, but is not enough by itself.
