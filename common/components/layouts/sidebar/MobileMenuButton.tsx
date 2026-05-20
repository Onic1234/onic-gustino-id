import clsx from 'clsx';

interface MobileMenuButtonProps {
  expandMenu: boolean;
  setExpandMenu: (expand: boolean) => void;
}

const MobileMenuButton = ({ expandMenu, setExpandMenu }: MobileMenuButtonProps) => {
  return (
    <div
      className="flex h-[21px] w-[26px] cursor-pointer flex-col justify-between lg:hidden"
      onClick={() => setExpandMenu(!expandMenu)}
    >
      <span
        className={clsx(
          "h-[3px] w-full origin-left rounded-full bg-neutral-950 transition-all duration-300 ease-in-out dark:bg-neutral-100",
          expandMenu ? "rotate-45" : ""
        )}
      />
      <span
        className={clsx(
          "h-[3px] w-full rounded-full bg-neutral-950 transition-all duration-300 ease-in-out dark:bg-neutral-100",
          expandMenu ? "w-0 opacity-0" : ""
        )}
      />
      <span
        className={clsx(
          "h-[3px] w-full origin-left rounded-full bg-neutral-950 transition-all duration-300 ease-in-out dark:bg-neutral-100",
          expandMenu ? "-rotate-45" : ""
        )}
      />
    </div>
  );
};

export default MobileMenuButton;
