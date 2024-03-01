import React from 'react'
import './skills.css'
import HorizontalWrapper from '../work/Horizontalwrapper'

const Skills = () => {
  return (
    <div id="skills">
      <h1 class="title" >Skills {'>'}</h1>
      <HorizontalWrapper direction='1400'>
        <div class="skills-container">
          <div class="skill-card">
            <div class="skill-level">
              <svg viewBox="0 0 128 128">
                <g fill="var(--svg-fill-color)"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
              </svg>
            </div>
            <h1 class="skill-name">React</h1>
          </div>
          <div class="skill-card">
            <div class="skill-level">
            <svg viewBox="0 0 128 128">
<g fill="#3FB6D3"><path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"></path></g><path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"></path><path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"></path><linearGradient id="flutter-original-a" gradientUnits="userSpaceOnUse" x1="59.365" y1="116.36" x2="86.825" y2="99.399"><stop offset="0" stop-color="#1b4e94"></stop><stop offset=".63" stop-color="#1a5497"></stop><stop offset="1" stop-color="#195a9b"></stop></linearGradient><path fill="url(#flutter-original-a)" d="M61.6 113.1l30.8-8.4-10.8-10.8z"></path>
</svg>
            </div>
            <h1 class="skill-name">Flutter</h1>
          </div>
          <div class="skill-card">
            <div class="skill-level">
            <svg viewBox="0 0 128 128">
<linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"></stop><stop offset="1" stop-color="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"></stop><stop offset="1" stop-color="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop><stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
</svg>
            </div>
            <h1 class="skill-name">Python</h1>
          </div>
          <div class="skill-card">
            <div class="skill-level">
            <svg viewBox="0 0 128 128">
<path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
</svg>
            </div>
            <h1 class="skill-name">HTML</h1>
          </div>
          <div class="skill-card">
            <div class="skill-level">
            <svg viewBox="0 0 128 128">
<path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
</svg>
            </div>
            <h1 class="skill-name">CSS</h1>
          </div>
          <div class="skill-card">
            <div class="skill-level">
            <svg viewBox="0 0 128 128">
<path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
</svg>
            </div>
            <h1 class="skill-name">C</h1>
          </div>
          <div class="skill-card">
            <div class="skill-level">
            <svg viewBox="0 0 128 128">
<path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
</svg>
            </div>
            <h1 class="skill-name">C++</h1>
          </div>
          <div class="skill-card">
            <div class="skill-level">
              <svg viewBox="0 0 128 128">
                <path fill="var(--svg-fill-color)" d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0"></path>
              </svg>
            </div>
            <h1 class="skill-name">My SQL</h1>
          </div>
          <div class="skill-card">
            <div class="skill-level">
            <svg viewBox="0 0 128 128">
<path fill="var(--svg-fill-color)" d="M44.44 100.63c-4.23-3.33-8.74-6.52-11.83-11.01-6.49-7.92-11.49-17.1-14.9-26.74-2.07-6.27-2.77-12.99-5.44-19.02-2.78-4.38.48-9.16 5.27-10.55 2.13-.41 5.89-2.43 1.36-.98-4.06 2.98-4.45-2.71-.29-3.07 2.84-.38 3.89-2.7 2.92-4.8-3.05-1.99 7.4-4.18 2.14-7.15-5.48-5.91 7.66-7.05 4.42-.33-.77 5.16 9.18-.95 6.87 5.01 2.35 2.86 8.8.65 8.63 4.67 3.42.24 4.6 3.11 7.8 3.33 3.33 1.5 9.36 2.69 10.49 6.44-3.3 2.61-10.95-5.4-11.31 1.84 1 10.69.74 21.7 4.65 31.88 1.85 6.16 6.33 11.01 10.38 15.81 3.88 4.7 9.12 8.01 14.48 10.8 4.69 2.21 9.75 3.68 14.87 4.6 2.07-1.59 5.74-7.48 8.97-5 .16 2.8-6.42 5.84-.31 5.54 3.59-1.08 6.08 2.77 9.04-.71 2.72 3.23 11.32-2.06 9.38 4.53-2.62 1.69-6.44.67-9.07 3-4.33-2.16-7.77 1.93-12.56 1.42-5.32.95-10.73 1.34-16.13 1.34-8.85-.7-17.89-.99-26.3-4.07-4.74-1.38-9.37-4.08-13.53-6.78zm7.47 3.24c4.63 2 9.16 4.11 14.23 4.75 8.05 1.12 16.37 2.84 24.45 1.27-3.66-1.65-7.44.64-11.08-1.18-4.37.94-9.06-.24-13.5-.82-5.05-2.25-10.5-3.8-15.23-6.72-5.91-2.16 3.06 2.77 4.65 3.17 3.69 2.1-4.06-1.08-5.16-1.95-3.09-1.74-3.49-1.37-.31.39.64.37 1.28.77 1.95 1.09zm-8.81-6.23c4.49 1.66-.02-3.16-2.07-2.88-.91-1.58-3.48-2.58-1.67-3.43-3.26 1.13-3.42-4.3-4.95-3.53-3.45-1.09-1.34-4.95-5.45-7.32-.37-2.5-4.08-4.66-5.26-8.43-.52-1.93-4.19-7.46-1.94-2.31 1.92 4.96 5.29 9.21 8.1 13.45 2.18 4.04 4.76 8.26 8.72 10.78 1.34 1.3 2.63 3.27 4.52 3.67zM30.17 83.45c.16-.68.82 1.46 0 0zm18.3 16.18c1-.44-1.43-.56 0 0zm2.44.89c-.25-1.23-1.11.69 0 0zm3.05 1.27c1.45-1.38-2.24-.87 0 0zm5.22 2.91c.89-1.3-2.82-.49 0 0zm-10.03-6.99c2.25-1.46-2.91-.02 0 0zm2.29 1.14c-.07-.77-.82.34 0 0zm11.43 7.13c1.84 1.16 10.73 2.54 5.16.48-.93.2-10.33-2.66-5.16-.48zM44.72 91.85c-.18-.77-2.85-.85 0 0zm5.32 3.1c1.39-.96-2.87-.74 0 0zm4.48 2.75c1.98-.75-3.23-.75 0 0zm-11.97-8.21c2.16 1.65 8.7.21 3.3-.99-2.45-1.31-7.99-2.2-4.22.79l.92.2zm15 9.16c.9-1.53-3.77-.88 0 0zm-4.56-3.63c5.27 1.49-4.43-3.34-1.3-.55l.7.32.6.23zm9.14 5.28c4.99.05-4.51-.68 0 0zm-21.5-13.7c-.19-.93-1.23.08 0 0zm29.94 18.44c.14-1.68-1.62 1.25 0 0zM49.15 91.82c-.3-.88-1.56-.04 0 0zm-8.04-5.8c2.86-.17-3.93-1.26 0 0zm-9.54-6.16c-.36-1.38-3.12-2.47 0 0zM56.6 95.74c-.52-.6-.25.13 0 0zm15.58 9.56c-.05-.91-.85.35 0 0zM55.22 94.32c.28-1.18-2.44-.36 0 0zm-11.6-7.36c2.13-.23-3.42-1.44 0 0zm19.63 12.2c3.32-1.32-3.24-.64 0 0zm-10.21-6.93c3.83.49-4.56-2.61-.84-.28l.84.28zm13.31 8.19c3.58-2.14 2.4 5.01 6.07.6 3.62-2.64-3.13 3.27 1.33.47 3.23-2.16 7.99 1.02 11 2.06 2.16-.11 4.27 1.87 6.49.67 4.27-1.15-8.36-1.71-5.05-3.75-3.91 1.14-6.8-1.36-8.72-3.86-4.39-1.01-9.46-3.25-11.65-7.14-.89-1.46 1.29.21-.77-2.18-2.64-2.35-3.96-5.02-5.73-7.88-2.12-1.13-2.37-4.46-2.58-.11.02-2.74-2.56-4.59-3.19-3.82-.01-2.64 2.76-1.32.82-3.27-.42-2.74-1.79-5.59-2.2-8.68-.64-1.49-.09-4.68-2.19-1.31-.76 3.57-.25-4.38.94-1.76 1.56-2.67-.56-2.36-.65-1.99 1.02-2.26.64-5.46-.27-4.24.54-2.39.86-8.8-.81-7.66 1.01-2.5 1.92-11.44-2.47-8.03-1.78.03-4.85.64-6.31 1.37 4.56 2.51-.46.91-2.32.51-.24 2.33-2.08 1.32-4.38 1.34 3.67.45-1.79 3.75-3.89 2.47-2.74 1.31 2.36 4.57.05 5.58.28 1.52-4.19-.55-3.84 2.96-2.65-1.12-.36 4.16.96 2.38 4.51 1.22 3.18 4.01 3.29 6.65-.74 1.54-3.63-3.62-.64-3.38-2.36-3.83-2.61-1.38-4.56.39-.45.13 4.99 2.53 1.57 3.72 3.01.47 3.1 3.1 3.71 4.76 1.81 1.88 1.44-2.08 3.6.18-1.37-2.02-7.25-5.68-2.52-4.51-.03-2.03-.86-3.67.6-3.63 1.44-2.6-1.51 6.42 1.73 3.11.9-.39 1.12-2.6 2.73.21 2.34 2.3.85 3.97-2.46 1.86.59 2.01 4.42 2.72 3.7 5.86.76 2.76 1.83 1.74 2.76 1.58.73 2.68 1.14.71 1.18-.57 3.34.72 2.56 2.69 3.6 4.07 2.3 1.04-3.29-7.04.66-2.43 4.16 3.75 1.56 5.32-2.17 4.72 2.36-.19 3.12 3.19 6.07 3.07 2.69 1.28 4.52 6.2-.12 4.15-1.61-1.45-7.31-3.24-2.65-.48 4.3 1.99 7.71 3.18 11.86 5.68 2.96 2.12 4.25 4.54 5.37 5.02-2.49 1.19-7.51-.95-3.78-1.61-2.33-.42-4.94-1.6-2.71 1.3 1.89 1.58 6.71 1.42 7.58 1.59-.73 1.61-1.99 1.74.03 1.86-2.25 1.22.72 1.41.93 2.1zm-4.6-13c-1.37-1.43-1.72-4.11-.24-1.78.75.3 2.43 4.38.24 1.78zm14.99 9.52c.85-.06.02.65 0 0zM59.59 83.91c-.06-2.17.49 1.67 0 0zM58.1 81.9c-1.73-3.32 2.17.95 0 0zM40.04 69.44c1.01-.27.5 1.73 0 0zm14.37 7.79c.62-2.33.73 1.96 0 0zm-10.15-7.06c-.71-1.29 1.5 1.21 0 0zm8.71 2.79c-1.63-3.65 1.16-2 .36.6l-.36-.6zM37.95 62.95c-.73-1.2-1.93-4.72-1.55-5.79.35 1.75 3.72 7.53 1.65 2.39-2.28-4.3 2.73 1.4 3.25 2.47.24 1.07-1.41-.29-.29 2.21-2.04-2.85-1.2 1.58-3.06-1.28zm-4.64-3.2c.19-2.79 1.06 1.91 0 0zm2.08.72c1-2.11 1.69 2.93 0 0zm-5.02-3.89c-1.73-1.72-2.98-3.3.08-1.07 1.18.05-2.62-3.6.28-1.16 3.06.56 1.51 5.01-.36 2.23zm2.64-.07c1-.99.53.98 0 0zm1.62.52c-1.52-2.85 1.85 1.2 0 0zm-3.22-3.08c-5.02-4.47 6.31 2.34.82.83l-.82-.83zm14.39 8.36c-2.18-1.3-.58-9.18.16-3.79 2.11-.68-.12 2.78 1.46 2.75-.24 2.18-.95 2.97-1.62 1.04zm5.33 3.15c.21-2.38.45 1.62 0 0zm-.93-.92c.24-1.01.03 1.2 0 0zM32.39 52.48c-3.23-4.45 9.38 4.51 2.07 1.13-.77-.21-1.69-.28-2.07-1.13zm10.26 5.43c-.31-3.75.68.62 0 0zm7.78 5c.6-2.14.05 1.41 0 0zM32.89 50.78c1.92-.41 7.95 3.37 2.41 1.08-.62-.69-1.93-.38-2.41-1.08zm16.47 8.21c.2-3.84 1.15-2.29.01.55l-.01-.55zm-15.05-9.55c.78-1.15-2.08-5.18.41-1.45 1.08.85 3.11 1.43 1.31 1.79 2.84 2.5-.68.68-1.72-.34zm14.24 8.35c.54-4.37.47 2.56 0 0zM32.68 45.41c.6-.26.32.79 0 0zm3.71 2.21c.96-2.01 1.77 2.23 0 0zm10.47 5.82c0-.77.2 1.12 0 0zm-.6-1.34c-1.45-3.59 1.35 1.9 0 0zm-.89-2.35c-.25-1.48.83 1.86 0 0zm1.45-2.36c-1-1.76 1.26-7.75 1.51-4.03-1.05 2.89-.3 4.51.43.63 1.36-3.06-.29 6.02-1.94 3.4zm1.49-8.91c.44-.53.1.65 0 0zM45.82 87.6c-.59-.52.07.33 0 0zm5.13 2.6c2.86.74 2.84-.44.26-.79-1.39-1.29-5.77-2.66-1.85-.16.27.65 1.09.63 1.59.95zm-10.14-6.74c1.57 1.18 5.93 3.32 2.24.45 1.24-1.44-2.38-2.21-1.18-3.18-3.06-1.87-2.41-1.7-.27-1.64-3.67-1.64.53-1.52.33-2.36-1.42-.28-7.03-2.5-3.73.18-3.36-1.71-.8.64-1.82.39-3.44-.94 3.06 2.62-.54 1.73 1.97 1.56 5.3 4 .83 1.65-.57.85 3.21 2.14 4.14 2.78zm5.37 3.09c6.53 2.1-3.2-2.58 0 0zm27.5 16.65c.08-1.3-.9 1.11 0 0zm2.82 1.19c1.51-1.46.06 2.33 2.5-.36.03-1.92-.07-3.06-2.8-.72-.75.42-1.09 2.19.3 1.08zM31.65 76.22c-.47-1.82-3.25-1.81 0 0zm3.01 1.98c-1.12-1.86-4-1.68 0 0zm17.17 10.35c1.68 1.49 7.7 1.09 2.03.18-.83-1.24-5.32-.94-2.03-.18zm23.6 14.57c2.57-2.16-2.5.97 0 0zm5.36 3.69c.02-.69-1.11.3 0 0zm.01-.97c2.86-3.03-2.77.18 0 0zM24.22 70.01c-2.43-3.47-1.51-5.03-3.86-7.87-.45-2.17-4.03-7.09-1.85-1.88 1.99 3.05 2.58 7.77 5.71 9.75zm55.68 34.87c5.26-3.4-2.15-1.48 0 0zm4.01 1.57c2.64-2.26-1.66-.47 0 0zM30.75 72.38c.76-1.12-1.94-.14 0 0zm52.33 32.99c2.55-1.64-.59-1.39-.46.15l.46-.15zM48.5 83.58c-.09-1.11-1.35.09 0 0zm2.14 1.23c-.69-1.38-1.05.21 0 0zm36.53 21.67c3.27-2.36-1.98-.45-.68.45l.68-.45zm-1.26-.6c2.67-2.23-2.8.99 0 0zm6.39 4.25c1.79-1.19-2.17-.38 0 0zM32.39 71.57c2.39.54 9.56 5.89 5.33.37-2.17-.64-.87-5.94-3.08-5 1.48 2.48 1.22 3.53-1.9 1.97-3.91-1.91-2.2.94-1.43 1.73-1.04.25 1.39.91 1.08.93zm-10.9-8.61c.43-1.77-3.95-9.75-2.07-4 .68 1.21.61 3.49 2.07 4zM41.5 75.3c-1.23-1.03-.06-.15 0 0zm3.03.71c0-1.88-3.35-.77 0 0zm26.3 16.57c-.5-1.28-1.98-.02 0 0zm1.26.93c-.18-.72-.72.14 0 0zm10.43 6.56c1-.74-1.25-.09 0 0zM26.93 64.35c2.87-1.11-3.07-.79 0 0zm41.59 26.2c-.04-1.86-1.83.46 0 0zM25.8 61.71c1.84-.62-1.71-.41 0 0zm5.34 2.59c-.03-.61-.56.23 0 0zm65.22 39.99c2.37-.48 7.77 1.21 8.64-.63-2.88-.07-9.95-2.03-10.28.46l.63.1 1.01.07zM32.84 64.73c.05-1.88-1.46-.07 0 0zm-14.05-9.75c-.64-3.58-2.43-.54 0 0zm3.35.84c.04-1.15-3.07-1.03 0 0zm1.91.94c-.55-.44-.43.57 0 0zm12.06 7.73c.57-.52-1.35-.38 0 0zm-13.33-9.85c-.33-2.71-3.88-.4 0 0zm-6.87-4.46c-.1-1.25-.67.47 0 0zm1.02-.77c-.17-1.48-.88.19 0 0zm5.65 3.37c2.39-.94-4.35-1.94-.49-.18l.49.18zm75.59 46.69c1.53-1.4-1.94-.43 0 0zm9.13 4.74c.61-1.81-1.54.23 0 0zM23.15 49.82c.26-1.75-1.89.35 0 0zm-8.03-5.38c-.43-2.47-.37-6.82 3.76-5.35-5.51 1.1 3.82 6.85 2.64 2.31 2.32.11 4.53-1.37 3.32.88 4.57-.5 7.73-4.46 12.14-3.91 3.44-.46 7.19-.8 10.89-2.18 3.04-.22 5.97-3.5 4.31-5.44-4.15-.35-8.5.17-13.08 1.08-5.08 1.06-9.7 3.06-14.83 3.93-5 .67 1 1.85-.43 2.11-2.61.9 3.11 1.52-.34 2.47-2.13-.41-4.35-1.14-3.44-3.38-4.79.62-9 2.61-5.21 7.48h.27zm11.54-5.88c1.12-4.14 6.01 3.4 1.84.55-.5-.38-1.32-.68-1.84-.55zm.22-2.01c1.62-1.2.86.68 0 0zm2.06.04c.15-1.9 4.71 1.01.75.68l-.75-.68zm2.81-1.14c1.03-1.2.3 1.07 0 0zm.72-.48c1.71-2.06 9.69-1.31 3.85-.2-1.56-1.18-2.76.7-3.85.2zm10.42-1.6c-.26-5.62 5.18 1.99 0 0zm2.96-.02c1.08-2.83 4.2-1.14.5-.57.08.3-.11 1.46-.5.57zM21.99 48.37c3.23-1.98-3.43-1.72 0 0zm2.39.66c1.13-1.2-2.46-.49 0 0zm-7.04-4.99c1.85-1.42-2.18-.54 0 0zm95.35 59.65c.05-1.65-1.41.74 0 0zM103 97.08c.28-1.9-1.24.16 0 0zm12.36 7.25c2.58.01 7.82-.8 2.2-.8-.88.13-5.13.11-2.2.8zM26.48 47.87c2.09-.14 3.27-2.3-.41-2.18-5.69-.59 5.02 1.95-.73 1.22-.77.51 1.09 1.1 1.14.96zm1.84.93c-.22-1.34-.65.71 0 0zm2.18-5.82c.9-1.12-1.26-.3 0 0zm-6.95-11.6c3.73-1.27 8.82-2.69 10.58.62-1.79-2.15-.72-4.28.97-1.12 2.39 3.19 3.59-1.45 2.03-2.52 1.77 2.2 3.79 3.24 1.19.14 2.83-3.4-5.66.45-7.59.41-.92.41-9.58 2.2-7.18 2.47zm2.19-4.18c2.13-1.6 7.35.96 4-1.59-.33-.3-7.35 1.93-4 1.59zm7.75.32c2.49.06-1.07-3.34 1.89-1.8-.49-1.59-3.45-1.89-4.9-2.52-.82 1.45 1.66 4.34 3.01 4.32zm-6.39-7.04c.86-1.16-1.51.6 0 0zm3.16.76c4.01-.53-1.02-1.72-.81-.04l.81.04zm-5.91-4.62c-2.82-3.69 5.31.62 2.44-3.24-2.41-1.92-4.73 2.16-2.44 3.24zm36.21 19.5c1.29-2.29-5.34-3.09-.87-.81.42.14.32.97.87.81z"></path>
</svg>
            </div>
            <h1 class="skill-name">Flask</h1>
          </div>
        </div>

        {/* <div class="skill-cards">
            <svg viewBox="0 0 128 128">
              <path fill="var(--svg-fill-color)" d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"></path>
            </svg>
            <h1 class="skill-name">React Js</h1>
                </div>
          <div class="skill-card">
            <img src="./assets/image/html.png" class="skill-img" alt="" />
            <div class="skill-level">98%</div>
            <h1 class="skill-name">Javascript</h1>
            </div>
          <div class="skill-card">
            <img src="./assets/image/html.png" class="skill-img" alt="" />
            <div class="skill-level">98%</div>
            <h1 class="skill-name">MySQl</h1>
         </div>
          <div class="skill-card">
            <img src="./assets/image/html.png" class="skill-img" alt="" />
            <div class="skill-level">98%</div>
            <h1 class="skill-name">HTML</h1>
              </div>
        </div> */}
      </HorizontalWrapper>
    </div>
  )
}

export default Skills
