import styled from "styled-components";

export default styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  grid-auto-rows: 1fr;
  .grid-item {
    text-align: center;
    h1,
    h3,
    a {
      text-transform: uppercase;
    }
    h1 {
      font-size: 2.5rem;
    }
    h3 {
      color: var(--blue);
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 1rem;
    }
    a {
      display: inline-block;
      margin-top: 2rem;
      text-decoration: none;
      color: var(--blue);
      padding: 0.5rem 1rem;
      border: 1px solid var(--blue);
      position: relative;
    }
    &.about,
    &.offer {
      padding: 4rem;
    }
    &.tiles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
      grid-auto-rows: 1fr;
      .tile {
        display: flex;
        justify-content: center;
        align-content: center;
        overflow: hidden;
        position: relative;
        &:first-of-type {
          background: var(--blue);
        }
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          &.house-icon {
            width: 200px;
            position: relative;
          }
        }
        &:last-child {
          position: relative;
          .overlay {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 153, 255, 0.5);
            padding: 1rem;
            display: flex;
            align-items: center;
          }
        }
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
      }
    }
    &.info {
      overflow: hidden;
      position: relative;
      .overlay {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 153, 255, 0.5);
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        ul {
          list-style: none;
          text-transform: uppercase;
          font-size: 1.5rem;
          li {
            padding: 0.2rem 0;
            font-weight: bold;
          }
        }
      }
    }
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;
