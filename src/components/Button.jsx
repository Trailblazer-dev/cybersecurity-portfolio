import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Button = forwardRef(({
  children,
  className = '',
  swit = false,
  onClick,
  as = 'div',
  href,
  download,
  target,
  rel,
  ariaLabel,
  type = 'button'
}, ref) => {
  
  const background = swit;
  const baseClasses = `
    w-fit h-fit px-5 py-2.5 rounded-md transition-all duration-300 hover:cursor-pointer
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary/50
    font-heading font-medium tracking-wide active:scale-95
    ${background 
      ? 'bg-cyber-accent/15 text-cyber-primary border border-cyber-primary/30 hover:bg-cyber-primary/10 hover:border-cyber-primary shadow-sm hover:shadow-cyber-primary/20'
      : 'text-cyber-secondary hover:text-cyber-primary hover:bg-cyber-primary/5'
    } 
    ${className}`;

  if (as === 'button' || onClick) {
    return (
      <button 
        ref={ref}
        className={baseClasses}
        onClick={onClick}
        type={type}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }

  if (as === 'a' || href) {
    return (
      <a 
        ref={ref}
        className={baseClasses}
        href={href || '#'}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  
  return (
    <div 
      ref={ref}
      className={baseClasses}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e);
        }
      } : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  swit: PropTypes.bool,
  onClick: PropTypes.func,
  as: PropTypes.oneOf(['div', 'button', 'a']),
  href: PropTypes.string,
  download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  target: PropTypes.string,
  rel: PropTypes.string,
  ariaLabel: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
