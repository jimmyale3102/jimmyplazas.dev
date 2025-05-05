import React from 'react';
import { useTheme, IconButton, Typography } from '@mui/material';
import { BorderRadiusMedium, onLightIconColor, onDarkIconColor } from '../../ThemeContext';

function IconButtonComponent({
  text = '',
  href,
  IconComponent,
  variant = "body2",
  fontWeight = "normal",
  fontColor = "text.secondary",
  fontStyle = {},
  openInNewTab = true
}) {
  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? onLightIconColor : onDarkIconColor;

  return (
    href ? (
      <IconButton
        style={{ marginRight: '4px', borderRadius: BorderRadiusMedium }}
        onClick={() => openInNewTab ? window.open(href, '_blank') : window.open(href)}
      >
        <IconComponent style={{ fill: iconColor }} />
        {
          text ? (
            <Typography
              style={fontStyle}
              paddingLeft={'8px'}
              variant={variant}
              color={fontColor}
              alignSelf={'flex-start'}
              fontWeight={fontWeight}
            >
              {text}
            </Typography>
          ) : null
        }
      </IconButton>
    ) : null
  );
};

export default IconButtonComponent;