export const Mask = () => {
  return (
    <div className="bottom-[calc(calc(100%-min(var(--framer-viewport-height,100%),100%))+0px)] h-[calc(min(var(--framer-viewport-height,100%),100%)*.25)] pointer-events-none fixed z-[5] order-[1003] w-full left-0">
      <div className="absolute inset-0 overflow-hidden">
        {/* <!-- Layer 1 --> */}
        <div
          className="absolute inset-0 z-[1] opacity-100 pointer-events-none backdrop-blur-[0.0390625px] will-change-auto
           [mask-image:linear-gradient(rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_25%,rgba(0,0,0,0)_37.5%)]"
        />

        {/* <!-- Layer 2 --> */}
        <div
          className="absolute inset-0 z-[2] opacity-100 pointer-events-none backdrop-blur-[0.078125px] will-change-auto
           [mask-image:linear-gradient(rgba(0,0,0,0)_12.5%,rgb(0,0,0)_25%,rgb(0,0,0)_37.5%,rgba(0,0,0,0)_50%)]"
        />

        {/* <!-- Layer 3 --> */}
        <div
          className="absolute inset-0 z-[3] opacity-100 pointer-events-none backdrop-blur-[0.15625px] will-change-auto
           [mask-image:linear-gradient(rgba(0,0,0,0)_25%,rgb(0,0,0)_37.5%,rgb(0,0,0)_50%,rgba(0,0,0,0)_62.5%)]"
        />

        {/* <!-- Layer 4 --> */}
        <div
          className="absolute inset-0 z-[4] opacity-100 pointer-events-none backdrop-blur-[0.3125px] will-change-auto
           [mask-image:linear-gradient(rgba(0,0,0,0)_37.5%,rgb(0,0,0)_50%,rgb(0,0,0)_62.5%,rgba(0,0,0,0)_75%)]"
        />

        {/* <!-- Layer 5 --> */}
        <div
          className="absolute inset-0 z-[5] opacity-100 pointer-events-none backdrop-blur-[0.625px] will-change-auto
           [mask-image:linear-gradient(rgba(0,0,0,0)_50%,rgb(0,0,0)_62.5%,rgb(0,0,0)_75%,rgba(0,0,0,0)_87.5%)]"
        />

        {/* <!-- Layer 6 --> */}
        <div
          className="absolute inset-0 z-[6] opacity-100 pointer-events-none backdrop-blur-[1.25px] will-change-auto
           [mask-image:linear-gradient(rgba(0,0,0,0)_62.5%,rgb(0,0,0)_75%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)]"
        />

        {/* <!-- Layer 7 --> */}
        <div
          className="absolute inset-0 z-[7] opacity-100 pointer-events-none backdrop-blur-[2.5px] will-change-auto
           [mask-image:linear-gradient(rgba(0,0,0,0)_75%,rgb(0,0,0)_87.5%,rgb(0,0,0)_100%)]"
        />

        {/* <!-- Layer 8 --> */}
        <div
          className="absolute inset-0 z-[8] opacity-100 pointer-events-none backdrop-blur-[5px] will-change-auto
           [mask-image:linear-gradient(rgba(0,0,0,0)_87.5%,rgb(0,0,0)_100%)]"
        />
      </div>
    </div>
  );
};
