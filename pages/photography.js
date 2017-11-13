import React from "react";
import Layout from "../components/layout";
import { remType, white, lightGrey } from "../constants/css";
import photographs from "../constants/photography";
import LazyLoad from 'react-lazy-load'

const urlPrefix = (size, fileName) =>
  `https://res.cloudinary.com/beardfury/image/upload/fl_progressive,fl_force_strip,q_70,c_scale,w_${size}/v1444865801/${fileName}`;

const Photo = ({
  name,
  description,
  url,
  camera,
  focalLength,
  shutterSpeed,
  aperture,
  iso
}) => (
  <figure>
    <LazyLoad offset={1000}>
      <img
        src={urlPrefix(1200, url)}
        srcSet={`${urlPrefix(1200, url)} 1200w, ${urlPrefix(
          1024,
          url
        )} 1024w, ${urlPrefix(768, url)} 768w, ${urlPrefix(
          500,
          url
        )} 500w, ${urlPrefix(420, url)} 420w`}
        alt={description}
      />
    </LazyLoad>
    <h3 className="h5">{name}</h3>
    <div className="meta-container">
      <figcaption>{description}</figcaption>
      <dl>
        <div>
          <dt>Camera</dt>
          <dd>{camera}</dd>
        </div>
        <div>
          <dt>Focal length</dt>
          <dd>{focalLength}</dd>
        </div>
        <div>
          <dt>Shutter speed</dt>
          <dd>{shutterSpeed}</dd>
        </div>
        <div>
          <dt>Aperture</dt>
          <dd>{aperture}</dd>
        </div>
        <div>
          <dt>ISO</dt>
          <dd>{iso}</dd>
        </div>
      </dl>
    </div>
    <style jsx>
      {`
        figure {
          margin: 0;
        }

        figure + figure {
          margin-top: 4em;
        }

        img {
          display: block;
          width: 100%;
        }

        h3 {
          margin-bottom: 0.3em;
        }

        .meta-container {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        figcaption {
          max-width: 40em;
          padding: 0 0 2em 0;
        }

        dl {
          margin: 0;
          overflow: hidden;
          width: 100%;
        }

        dl div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          position: relative;
        }

        dl div + div {
          margin-top: 0.75em;
        }

        dl div:after {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          white-space: nowrap;
          font-weight: 300;
          line-height: 1;
          color: ${lightGrey};
          content:
          ". . . . . . . . . . . . . . . . . . . . "
          ". . . . . . . . . . . . . . . . . . . . "
          ". . . . . . . . . . . . . . . . . . . . "
          ". . . . . . . . . . . . . . . . . . . . "
        }

        dt, dd {
          font-size: 0.8125rem;
          background: ${white};
          display: block;
          margin: 0;
          padding: 0;
          line-height: 1;
          position: relative;
          z-index: 100;
        }

        dt {
          padding: 0 0.3em 0 0;
          font-weight: 400;
        }

        dd {
          text-align: right;
          padding: 0 0 0 0.3em;
          font-weight: 600;
        }

        @media (min-width: 767px) {
          figure + figure {
            margin-top: 5em;
          }

          .meta-container {
            flex-direction: row;
          }

          figcaption,
          dl {
            flex: 1 100%;
          }

          figcaption {
            flex: 1 66%;
            padding: 0 1em 0 0;
          }

          dl {
            flex: 1 33%;
          }
        }
      `}
    </style>
  </figure>
);

const Photography = () => (
  <Layout>
    <h1 className="h2">Photography</h1>
    <p>These are select moments in time from my travel and every day life. If you would like to use a photo please contact me first.</p>
    {photographs.map(photo => <Photo key={photo.name} {...photo} />)}
    <style jsx>
      {`
        h1,
        h2 {
          margin-top: 0;
          padding: 0;
        }

        h1 {
          margin-bottom: 0.3em;
        }

        p {
          margin-bottom: 3em;
        }
      `}
    </style>
  </Layout>
);

export default Photography;
