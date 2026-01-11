import { Variants } from 'framer-motion';

/**
 * Premium easing functions for a formal and sophisticated feel.
 */
export const easings = {
    premium: [0.76, 0, 0.24, 1], // Sophisticated cubic-bezier
    outQuart: [0.25, 1, 0.5, 1],
    outExpo: [0.16, 1, 0.3, 1],
};

/**
 * Entrance animation for pages.
 * Subtle, fast, and formal.
 */
export const pageTransition: Variants = {
    initial: {
        opacity: 0,
        y: 15,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: easings.premium,
        },
    },
    exit: {
        opacity: 0,
        y: -15,
        transition: {
            duration: 0.3,
            ease: easings.outQuart,
        },
    },
};

/**
 * Standard fade in up variant for components.
 */
export const fadeInUp: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: easings.outQuart,
            delay: custom * 0.05,
        },
    }),
};

/**
 * Stagger container for children.
 */
export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

/**
 * Standard fade in animation object.
 */
export const fadeIn = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: easings.outQuart } }
    }
};

/**
 * Slide in from left animation object.
 */
export const slideInFromLeft = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easings.outQuart } }
    }
};

/**
 * Slide in from right animation object.
 */
export const slideInFromRight = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easings.outQuart } }
    }
};

/**
 * Scale in animation object.
 */
export const scaleIn = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easings.outQuart } }
    }
};
