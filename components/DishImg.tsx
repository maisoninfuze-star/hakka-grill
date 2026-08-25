import { DISH_IMAGES, DISH_IMAGE_OF } from '@/lib/dish-images';

type Props = {
  /** Menu item slug. Several dishes may resolve to the same photograph. */
  dish: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

/**
 * The kitchen's own photograph of a given menu item.
 *
 * Returns null when a dish has no photo rather than rendering a placeholder —
 * a card with a grey box reads as broken, whereas a card that is simply
 * typographic reads as intentional. Every one of the 99 items currently has a
 * photograph, but that is data, not a guarantee.
 */
export default function DishImg({ dish, alt, sizes, className, priority }: Props) {
  const key = DISH_IMAGE_OF[dish];
  const meta = key ? DISH_IMAGES[key] : undefined;
  if (!meta) return null;

  const { widths, w, h, blur } = meta;
  const srcset = (ext: string) => widths.map((n) => `/img/dish/${key}-${n}.${ext} ${n}w`).join(', ');

  return (
    <picture data-fill="">
      <source type="image/avif" srcSet={srcset('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcset('webp')} sizes={sizes} />
      <img
        src={`/img/dish/${key}-${widths[widths.length - 1]}.webp`}
        alt={alt}
        width={w}
        height={h}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{ backgroundImage: `url("${blur}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
    </picture>
  );
}
