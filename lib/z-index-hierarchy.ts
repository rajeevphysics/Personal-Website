/**
 * Z-Index Hierarchy Documentation
 *
 * This file documents the z-index values used throughout the application
 * to maintain consistent layering and prevent visual conflicts.
 *
 * IMPORTANT: Always refer to this hierarchy when adding new components
 * or modifying existing ones to ensure proper stacking order.
 */

export const Z_INDEX = {
  /**
   * z-0 (or no z-index)
   * Base layer - backgrounds, containers without specific layering needs
   * Used for: Section backgrounds, base containers
   */
  BACKGROUND: 0,

  /**
   * z-20
   * Images and media content
   * Used for: Timeline event images, project images, media elements
   * Should appear behind the cursor but in front of backgrounds
   */
  IMAGES: 20,

  /**
   * z-30
   * Interactive elements and cards
   * Used for: Project cards, timeline event cards, clickable elements, current project container
   * Should appear behind the cursor to allow cursor hover effects
   */
  INTERACTIVE: 30,

  /**
   * z-35
   * Main header/navigation bar
   * Used for: Top header bar with logo and navigation links
   * Should appear above interactive elements but below the cursor
   */
  HEADER: 35,

  /**
   * z-36
   * Footer navigation/content
   * Used for: Footer component with links and information
   * Should appear at similar level to header for consistent navigation layering
   * Note: Within footer, static text uses z-50 (appears above cursor) and
   * interactive links use z-30 (cursor appears above them for hover effects)
   */
  FOOTER: 36,

  /**
   * z-40
   * Custom cursor
   * Used for: The blue circle cursor that follows the mouse
   * Should appear:
   * - Behind text content (z-50)
   * - In front of interactive elements (z-30) to show hover effects
   * - In front of images (z-20)
   * - Behind menu overlay (z-90) when menu is open
   */
  CURSOR: 40,

  /**
   * z-45
   * Scroll to top button
   * Used for: The floating button that appears when scrolling down
   * Should appear above the cursor (z-40) but below text content (z-50)
   * and well below the menu overlay (z-90)
   */
  SCROLL_TO_TOP: 45,

  /**
   * z-46
   * Scroll cursor overlay
   * Used for: Special cursor that appears when hovering over the scroll-to-top button
   * Should appear above the scroll button (z-45) to overlay it with hover effect
   * but below text content (z-50) and menu overlay (z-90)
   */
  SCROLL_CURSOR: 46,

  /**
   * z-50
   * Text content and typography
   * Used for: Hero title, section text, quotes, paragraphs, "What I'm Doing Now" title
   * Should appear above the cursor so text remains readable
   * while cursor appears behind it
   */
  TEXT_CONTENT: 50,

  /**
   * z-90 (or z-[90])
   * Full-screen menu overlay
   * Used for: The full-screen navigation menu that appears when clicking MENU button
   * Should appear above most content but below the menu button
   * Note: Cursor is currently at z-40, so it appears behind the menu overlay
   */
  MENU_OVERLAY: 90,

  /**
   * z-100 (or z-[100])
   * Menu button and highest priority UI elements
   * Used for: The MENU button that toggles the full-screen overlay
   * Should appear above everything else to remain accessible
   */
  MENU_BUTTON: 100,

  /**
   * z-105 (or z-[105])
   * Menu hover cursor
   * Used for: Special cursor state when hovering over the MENU button
   * Should appear above the menu button (z-100) to show hover effect
   * This is the highest z-index in the application
   */
  MENU_HOVER_CURSOR: 105,
} as const

/**
 * Usage Examples:
 *
 * // For backgrounds
 * <div className="relative z-0">
 *
 * // For images
 * <div className="relative z-20">
 *
 * // For interactive cards
 * <div className="relative z-30">
 *
 * // For header
 * <header className="fixed z-[35]">
 *
 * // For footer
 * <footer className="relative z-[36]">
 *
 * // For cursor (in custom-cursor.tsx)
 * <div className="fixed z-40">
 *
 * // For scroll to top button
 * <button className="fixed z-[45]">
 *
 * // For scroll cursor (in scroll-cursor.tsx)
 * <div className="fixed z-[46]">
 *
 * // For text content
 * <div className="relative z-50">
 *
 * // For menu overlay
 * <div className="fixed z-[90]">
 *
 * // For menu button
 * <button className="fixed z-[100]">
 *
 * // For menu hover cursor (in custom-cursor.tsx)
 * <div className="fixed z-[105]">
 */

/**
 * Visual Hierarchy (bottom to top):
 *
 * ┌─────────────────────────────────────┐
 * │  z-105: Menu Hover Cursor           │  ← Highest (cursor over menu button)
 * ├─────────────────────────────────────┤
 * │  z-100: Menu Button                 │  ← Menu button
 * ├─────────────────────────────────────┤
 * │  z-90: Menu Overlay                 │  ← Full-screen menu
 * ├─────────────────────────────────────┤
 * │  z-50: Text Content                 │  ← Readable text above cursor
 * ├─────────────────────────────────────┤
 * │  z-46: Scroll Cursor                │  ← Hover cursor for scroll button
 * ├─────────────────────────────────────┤
 * │  z-45: Scroll to Top Button         │  ← Floating scroll button
 * ├─────────────────────────────────────┤
 * │  z-40: Cursor                       │  ← Custom blue circle cursor
 * ├─────────────────────────────────────┤
 * │  z-36: Footer                       │  ← Footer navigation/content
 * ├─────────────────────────────────────┤
 * │  z-35: Header                       │  ← Top navigation bar
 * ├─────────────────────────────────────┤
 * │  z-30: Interactive Elements         │  ← Cards, links (cursor hovers over)
 * ├─────────────────────────────────────┤
 * │  z-20: Images                       │  ← Media content
 * ├─────────────────────────────────────┤
 * │  z-0: Backgrounds                   │  ← Base layer
 * └─────────────────────────────────────┘
 */
