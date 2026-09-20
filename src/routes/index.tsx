import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, Heart, Menu, Search, ShoppingBag, Sparkles, Truck, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import logo from "@/assets/joyory/logo.png.asset.json";
import catMakeup from "@/assets/joyory/cat-makeup.png.asset.json";
import catSkin from "@/assets/joyory/cat-skin.png.asset.json";
import catBody from "@/assets/joyory/cat-body.png.asset.json";
import catFragrance from "@/assets/joyory/cat-fragrance.png.asset.json";
import offerAqua from "@/assets/joyory/offer-aqua.png.asset.json";
import offerConscious from "@/assets/joyory/offer-conscious.png.asset.json";
import offerGabit from "@/assets/joyory/offer-gabit.png.asset.json";
import offerSheth from "@/assets/joyory/offer-sheth.png.asset.json";
import offerDerma from "@/assets/joyory/offer-derma.png.asset.json";
import tryon from "@/assets/joyory/tryon.png.asset.json";
import niacinamide from "@/assets/joyory/product-niacinamide.png.asset.json";
import spots from "@/assets/joyory/product-spots.png.asset.json";
import lip from "@/assets/joyory/product-lip.png.asset.json";
import vitc from "@/assets/joyory/product-vitc.png.asset.json";
import retinol from "@/assets/joyory/product-retinol.png.asset.json";
import mist from "@/assets/joyory/product-mist.png.asset.json";
import plum from "@/assets/joyory/product-plum.png.asset.json";
import gel from "@/assets/joyory/product-gel.png.asset.json";
import toner from "@/assets/joyory/product-toner.png.asset.json";
import shade from "@/assets/joyory/shade.png.asset.json";
import acne from "@/assets/joyory/skin-acne.png.asset.json";
import dry from "@/assets/joyory/skin-dry.png.asset.json";
import sensitive from "@/assets/joyory/skin-sensitive.png.asset.json";
import help from "@/assets/joyory/help.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Joyory - India's Premium Beauty & Cosmetics Store" },
    { name: "description", content: "Discover makeup, skincare, bath, body and fragrance favorites at Joyory." },
    { property: "og:title", content: "Joyory - India's Premium Beauty & Cosmetics Store" },
    { property: "og:description", content: "Discover makeup, skincare, bath, body and fragrance favorites at Joyory." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

const categories = [
  { name: "Makeup", image: catMakeup.url }, { name: "Skin", image: catSkin.url },
  { name: "Bath & Body", image: catBody.url }, { name: "Fragrances", image: catFragrance.url },
];
const offers = [offerAqua.url, offerConscious.url, offerGabit.url, offerSheth.url, offerDerma.url];
const recommended = [
  { image: niacinamide.url, brand: "Foxtale", name: "5% Niacinamide Brightening Serum - 30 ML", price: 463, old: 545 },
  { image: spots.url, brand: "Foxtale", name: "Rapid Spot Reduction Drops - 30 ML", price: 506, old: 595 },
  { image: lip.url, brand: "Foxtale", name: "Lip Sleeping Mask with Maracuja Oil - 12 G", price: 378, old: 445 },
  { image: vitc.url, brand: "Foxtale", name: "Vitamin C Serum - 30 ML", price: 548, old: 645 },
  { image: retinol.url, brand: "Foxtale", name: "0.15% Retinol Night Serum - 30 ML", price: 509, old: 599 },
];
const bestsellers = [
  { image: mist.url, brand: "Aqualogica", name: "Refresh+ Dewy Floral Kiss Perfume Body Mist - 150 ML", price: 424, old: 499 },
  { image: plum.url, brand: "Plum", name: "Green Tea Oil-Free Moisturizer For Oily Skin - 50 ML", price: 413, old: 470 },
  { image: gel.url, brand: "Plum", name: "Green Tea Renewed Clarity Night Gel - 50 ML", price: 506, old: 575 },
  { image: toner.url, brand: "Plum", name: "Green Tea Pore Tightening Face Toner - 200 ML", price: 369, old: 420 },
];

function ProductRow({ title, products, onAdd }: { title: string; products: typeof recommended; onAdd: () => void }) {
  const row = useRef<HTMLDivElement>(null);
  const slide = (direction: number) => row.current?.scrollBy({ left: direction * 620, behavior: "smooth" });
  return <section className="mx-auto max-w-[1440px] px-5 py-10 md:px-10 md:py-16">
    <div className="mb-6 flex items-center justify-between"><h2 className="text-2xl font-medium md:text-3xl">{title}</h2><div className="hidden gap-2 md:flex"><Button aria-label="Previous products" size="icon" variant="outline" onClick={() => slide(-1)}><ArrowLeft size={18}/></Button><Button aria-label="Next products" size="icon" variant="outline" onClick={() => slide(1)}><ArrowRight size={18}/></Button></div></div>
    <div ref={row} className="scrollbar-none flex snap-x gap-3 overflow-x-auto pb-2 md:gap-5">
      {products.map((product) => <article key={product.name} className="w-[68vw] max-w-[270px] shrink-0 snap-start border border-border bg-card p-3">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted"><img className="h-full w-full object-contain transition-transform duration-300 hover:scale-105" src={product.image} alt={product.name}/><Button aria-label="Add to wishlist" variant="icon" size="icon" className="absolute right-2 top-2 bg-background/90"><Heart size={18}/></Button></div>
        <div className="pt-4"><p className="text-xs font-semibold uppercase text-muted-foreground">{product.brand}</p><h3 className="mt-1 line-clamp-2 min-h-10 text-sm font-medium">{product.name}</h3><p className="mt-3 font-semibold">₹{product.price} <span className="ml-1 text-xs font-normal text-muted-foreground line-through">₹{product.old}</span> <span className="ml-1 text-xs text-secondary">15% OFF</span></p><p className="mt-2 text-xs text-muted-foreground">Get {Math.round(product.price / 10) * 10} Joy Points on your next order</p><Button className="mt-4 w-full" onClick={onAdd}>Add to Bag <ShoppingBag size={16}/></Button></div>
      </article>)}
    </div>
  </section>;
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  return <main className="min-h-screen bg-background">
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-[1440px] items-center gap-4 px-5 md:px-10">
        <Button size="icon" variant="icon" className="md:hidden" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
        <a href="#top" className="mr-auto"><img src={logo.url} className="h-12 w-24 object-contain" alt="Joyory"/></a>
        <label className="hidden h-11 max-w-md flex-1 items-center gap-2 rounded-md border border-input px-3 md:flex"><Search size={19}/><input className="min-w-0 flex-1 bg-transparent text-sm outline-none" placeholder="Search products, brands, categories..."/><Sparkles size={18} className="text-primary"/></label>
        <Button size="icon" variant="icon" aria-label="Wishlist"><Heart/></Button><Button size="icon" variant="icon" aria-label="Account"><UserRound/></Button><Button size="icon" variant="icon" className="relative" aria-label="Shopping bag"><ShoppingBag/>{bagCount > 0 && <span className="absolute right-0 top-0 grid size-5 place-items-center rounded-full bg-secondary text-[10px] text-secondary-foreground">{bagCount}</span>}</Button>
      </div>
      <nav className={`${menuOpen ? "flex" : "hidden"} flex-col border-t border-border px-5 py-3 md:flex md:h-12 md:flex-row md:items-center md:justify-center md:gap-36 md:border-0 md:p-0`}><a className="py-2" href="#brands">Brands</a><a className="py-2" href="#offers">Offers</a><a className="py-2" href="#features">AI Beauty Features</a><a className="py-2" href="#about">About us</a></nav>
    </header>
    <div className="overflow-hidden bg-secondary py-2 text-xs font-medium text-secondary-foreground"><div className="flex min-w-max animate-[marquee_20s_linear_infinite] gap-24 px-8"><span>* Upto 20% Cashback on successful payment. Added to your wallet.</span><span>* Terms and Conditions are applied</span><span>* Get Joy Points equal to what you spend on this order.</span></div></div>
    <section id="top" className="bg-accent"><img src={tryon.url} alt="Virtual beauty try on" className="mx-auto max-h-[480px] w-full max-w-[1600px] object-cover"/></section>
    <section id="brands" className="mx-auto max-w-[1440px] px-5 py-10 md:px-10 md:py-16"><h2 className="mb-7 text-2xl font-medium md:text-3xl">Top Categories</h2><div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">{categories.map((category) => <a href="#recommended" key={category.name} className="group text-center"><div className="aspect-square overflow-hidden rounded-full bg-muted"><img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={category.image} alt={category.name}/></div><h3 className="mt-3 font-medium">{category.name}</h3></a>)}</div></section>
    <section id="offers" className="bg-muted py-10 md:py-16"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><h2 className="mb-6 text-2xl font-medium md:text-3xl">Offers</h2><div className="scrollbar-none flex snap-x gap-4 overflow-x-auto">{offers.map((image, index) => <img key={image} src={image} alt={`Beauty offer ${index + 1}`} className="aspect-[16/9] w-[84vw] max-w-xl shrink-0 snap-start object-cover"/>)}</div></div></section>
    <section id="features" className="mx-auto max-w-[1440px] px-5 pt-10 md:px-10 md:pt-16"><img src={tryon.url} alt="Try beauty products virtually" className="w-full object-cover"/></section>
    <div id="recommended"><ProductRow title="Recommended For You" products={recommended} onAdd={() => setBagCount((count) => count + 1)}/></div>
    <section className="mx-auto max-w-[1440px] px-5 md:px-10"><img src={shade.url} alt="Find your perfect shade" className="w-full object-cover"/></section>
    <ProductRow title="Best Sellers" products={bestsellers} onAdd={() => setBagCount((count) => count + 1)}/>
    <section className="bg-muted py-10 md:py-16"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><h2 className="mb-7 text-2xl font-medium md:text-3xl">Shop By Skin Types</h2><div className="grid grid-cols-3 gap-3 md:gap-7">{[[acne,"Acne Prone"],[dry,"Dry Skin"],[sensitive,"Sensitive"]].map(([image,name]) => <div key={name as string} className="text-center"><img src={(image as typeof acne).url} alt={name as string} className="aspect-square w-full object-cover"/><h3 className="mt-3 text-sm font-medium md:text-lg">{name as string}</h3></div>)}</div></div></section>
    <section className="mx-auto max-w-[1440px] px-5 py-10 md:px-10 md:py-16"><img src={help.url} alt="Not sure where to start? Let us help" className="w-full object-cover"/></section>
    <section id="about" className="border-y border-border"><div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 md:grid-cols-4 md:px-10">{[[BadgeCheck,"100% Authentic","Directly sourced from brands"],[Truck,"Free Shipping","On all orders above ₹499"],[Sparkles,"Beauty Advisors","Get expert consultations"],[ArrowRight,"Easy Returns","Hassle-free pick-ups and refunds"]].map(([Icon,title,text]) => { const FeatureIcon = Icon as typeof BadgeCheck; return <div key={title as string} className="border-border p-5 md:border-r md:p-8"><FeatureIcon className="mb-3 text-primary"/><h3 className="font-semibold">{title as string}</h3><p className="mt-1 text-xs text-muted-foreground">{text as string}</p></div>})}</div></section>
    <footer className="bg-foreground px-5 py-10 text-background md:px-10"><div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-4"><div><img src={logo.url} alt="Joyory" className="h-14 brightness-0 invert"/><p className="mt-3 max-w-xs text-sm opacity-70">Your destination for authentic beauty, skincare and fragrance favorites.</p></div><div><h3 className="font-semibold">Shop</h3><p className="mt-3 text-sm opacity-70">Makeup<br/>Skin<br/>Bath & Body<br/>Fragrances</p></div><div><h3 className="font-semibold">Help</h3><p className="mt-3 text-sm opacity-70">Contact Us<br/>Shipping<br/>Returns<br/>FAQs</p></div><div><h3 className="font-semibold">Stay in the know</h3><div className="mt-3 flex"><input aria-label="Email address" placeholder="Your email address" className="min-w-0 flex-1 bg-background px-3 py-2 text-sm text-foreground outline-none"/><Button className="rounded-l-none">Join</Button></div></div></div><p className="mx-auto mt-10 max-w-[1440px] border-t border-background/20 pt-5 text-xs opacity-60">© 2026 Joyory. All rights reserved.</p></footer>
  </main>;
}