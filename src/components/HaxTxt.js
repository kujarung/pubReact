import React from 'react';

export default function HaxTxt(props) {
  const { isGray, txt } = props;
  return (
    <div className="hax-con">
      {isGray ? (
        <svg style={{ width: '100%', height: '100%' }}>
          <filter id="dropshadow" height="150%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="3" dy="5" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <g transform="translate(3,3)" style={{ transform: 'scale(1.1)' }}>
            <path
              d="M64 49.4205L64 20.9803C64 18.5647 62.6864 16.3339 60.5546 15.1264L35.4458 0.905574C33.3132 -0.301858 30.6868 -0.301858 28.5542 0.905574L3.44543 15.1264C1.3136 16.3339 0 18.5647 0 20.9803L0 49.4205C0 51.8353 1.3136 54.0669 3.44543 55.2743L28.5542 69.4944C30.6868 70.7019 33.3132 70.7019 35.4458 69.4944L60.5546 55.2743C62.6864 54.0669 64 51.8353 64 49.4205"
              fill="#F5F6FA"
              fillRule="evenodd"
              stroke="none"
            />
            <path
              d="M52.8 40.4349L52.8 17.1657C52.8 15.1893 51.7163 13.3641 49.9575 12.3762L29.2428 0.740924C27.4834 -0.246975 25.3166 -0.246975 23.5572 0.740924L2.84248 12.3762C1.08372 13.3641 0 15.1893 0 17.1657L0 40.4349C0 42.4107 1.08372 44.2366 2.84248 45.2245L23.5572 56.8591C25.3166 57.847 27.4834 57.847 29.2428 56.8591L49.9575 45.2245C51.7163 44.2366 52.8 42.4107 52.8 40.4349"
              transform="translate(5.6 6.4)"
              fill="#F5F6FA"
              fillRule="evenodd"
              stroke="#C1C0C8"
              strokeWidth="1"
            />
          </g>
        </svg>
      ) : (
        <svg style={{ width: '100%', height: '100%' }}>
          <filter id="dropshadow" height="150%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="3" dy="5" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <g transform="translate(3,3)" filter="url(#dropshadow)">
            <path
              d="M64 20.9803C64 18.5647 62.6864 16.3339 60.5546 15.1264L35.4458 0.905574C33.3132 -0.301858 30.6868 -0.301858 28.5542 0.905574L3.44543 15.1264C1.3136 16.3339 0 18.5647 0 20.9803L0 49.4205C0 51.8353 1.3136 54.0669 3.44543 55.2743L28.5542 69.4944C30.6868 70.7019 33.3132 70.7019 35.4458 69.4944L60.5546 55.2743C62.6864 54.0669 64 51.8353 64 49.4205L64 20.9803Z"
              fill="#FFFFFF"
              fillRule="evenodd"
              stroke="#1769FF"
              strokeWidth="1"
            />
            <path
              d="M52.8 17.1657C52.8 15.1893 51.7163 13.3641 49.9575 12.3762L29.2428 0.740924C27.4834 -0.246975 25.3166 -0.246975 23.5572 0.740924L2.84248 12.3762C1.08372 13.3641 0 15.1893 0 17.1657L0 40.4349C0 42.4107 1.08372 44.2366 2.84248 45.2245L23.5572 56.8591C25.3166 57.847 27.4834 57.847 29.2428 56.8591L49.9575 45.2245C51.7163 44.2366 52.8 42.4107 52.8 40.4349L52.8 17.1657Z"
              transform="translate(5.5999756 6.4003906)"
              fill="none"
              fillRule="evenodd"
              stroke="#1769FF"
              strokeOpacity="0.14117648"
              strokeWidth="1"
            />
          </g>
        </svg>
      )}

      <div className="hax-desc">
        <h6
          className={
            isGray ? 'fontweight400 color-gray' : 'fontweight400 color-primary'
          }
        >
          {txt}
        </h6>
      </div>
    </div>
  );
}
