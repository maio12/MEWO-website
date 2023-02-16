import Link from "next/link";
import * as React from "react";
import styles from "@/styles/media/MediaPiece.module.css";
import ReactPlayer from "react-player";

export interface MediaPieceProps {
  name: string;
  description?: string;
  link?: string;
}

interface MediaPiecesProps {
  mediaPiece: {
    name: string;
    description?: string;
    link?: string;
  }[];
}

export const MediaPieces = ({ mediaPiece }: MediaPiecesProps) => {
  return (
    <>
      {mediaPiece.map((m) => (
        <MediaPiece {...m} />
      ))}
    </>
  );
};

const MediaPiece = ({ name, description, link }: MediaPieceProps) => {
  return (
    <div className={styles.mediaPieceWrapper}>
      <h3 className={styles.mediaPieceName}>{name}</h3>
      <p className={styles.mediaPieceDescription}>{description}</p>
      <ReactPlayer url={`${link}`} />
    </div>
  );
};
