"use server";

import { auth } from "@/app/lib/auth";
import { db } from "@/app/lib/firebase";
import { Timestamp } from "firebase-admin/firestore";

export default async function createSocialLinks({
  profileId,
  github,
  instagram,
  linkedin,
  phone,
}: {
  profileId: string;
  github: string;
  instagram: string;
  linkedin: string;
  phone: string;
}) {
  const session = await auth();

  if (!session) return;

  try {
    await db.collection("profiles").doc(profileId).update({
      socialMedias: {
        github,
        instagram,
        linkedin,
        phone,
      },
      updatedAt: Timestamp.now().toMillis(),
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
