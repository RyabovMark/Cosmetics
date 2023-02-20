import React, { useEffect } from 'react';
import './style.scss';
import classNames from 'classnames';

interface ModalProps {
  className?: string | undefined;
  text: string;
  active?: boolean | undefined;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({
  className,
  text,
  active,
  setActive,
}:ModalProps):JSX.Element => {
  const classes = classNames('modal', className, { active });

  useEffect(() => {
    setTimeout(() => setActive(false), 3000);
  }, [active]);

  return (
    <div className={classes}>
      <p className="modal__content">{text}</p>
    </div>
  );
};
