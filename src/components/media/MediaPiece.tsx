import Link from "next/link";
import * as React from "react";
import styles from "@/styles/media/MediaPiece.module.css";
import ReactPlayer from "react-player";

export interface MediaPieceProps {
  name: string;
  description?: string;
  description2?: string;
  link?: string;
  cta?: string;
}

interface MediaPiecesProps {
  mediaPiece: {
    name: string;
    description?: string;
    description2?: string;
    link?: string;
    cta?: string;
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

const MediaPiece = ({
  name,
  description,
  description2,
  link,
  cta,
}: MediaPieceProps) => {
  return (
    <div className={styles.mediaPieceWrapper}>
      <h3 className={styles.mediaPieceName}>{name}</h3>
      <p className={styles.mediaPieceDescription}>{description}</p>
      <p className={styles.mediaPieceDescription2}>{description2}</p>
      <ReactPlayer
        style={{
          maxWidth: "90vw",
        }}
        url={`${link}`}
      />
      <h3 className={styles.mediaPieceCTA}>{cta}</h3>
    </div>
  );
};
