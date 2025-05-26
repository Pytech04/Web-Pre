import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function EasterEgg() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-5 right-5 w-4 h-4 bg-dusty-rose rounded-full cursor-pointer opacity-30 hover:opacity-100 hover:scale-150 transition-all duration-300 z-50"
      />
      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md p-8 bg-white rounded-2xl animate-modalSlideIn">
          <div className="text-center">
            <h3 className="text-twilight-blue mb-4 font-display text-xl">
              Even silence saw us.
            </h3>
            <p className="italic leading-relaxed text-deep-charcoal mb-4">
              Dear swan, come towards my tree,
              We shall enjoy ourselves with tea.
              Begin the enchantment of lilies—
              Oh my traveler, my love, my visitor.

              Suit and dance beneath the tree,
              Look thrice into the deep cloak of water lilies,
              Brushed with pale love and mint.
              Oh my visitor, my love, my traveler.

              Feed yourself a basket of bread,
              Milk and berries,
              Spilled with fiery honey—
              Dipped in sacrifice.

              I have been waiting to hold your hands
              For three lunars,
              Like white nights from Fyodor
            </p>
            <p className="text-dusty-rose">
              — Fyodor Dostoevsky, White Nights            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
