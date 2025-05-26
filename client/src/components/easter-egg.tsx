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
              "Pain and suffering are always inevitable for a large intelligence and a deep heart."
            </p>
            <p className="text-dusty-rose">
              — Fyodor Dostoevsky, Crime and Punishment
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
