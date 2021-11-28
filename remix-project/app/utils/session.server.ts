import { createCookieSessionStorage, redirect } from "remix";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import {auth } from '~/fire/fireClient';

type LoginForm = {
    username: string;
    password: string;
};


export async function register({
  username,
  password
}: LoginForm) {
  let user = await createUserWithEmailAndPassword(auth, username ,  password )
    .then(userCredential => userCredential.user)
    .catch(function(error): any {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            return ('The password is too weak.');
          } else {
            return errorMessage;
          }
    });
        
  return user;
}

export async function login({
  username,
  password
}: LoginForm) {
  let user = await signInWithEmailAndPassword(auth, username, password)
    .then(userCredential => userCredential.user)
    .catch(err => {
      err.code;
      err.message;
    });
  return user;
}

let sessionSecret = "why is not reading from .env ";
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

let storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});

export function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
  let session = await getUserSession(request);
  let userId = session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  let session = await getUserSession(request);
  let userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    let searchParams = new URLSearchParams([
      ["redirectTo", redirectTo]
    ]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

export async function getUser(request: Request) {
  let userId = auth.currentUser?.email 
  if (typeof userId !== "string") {
    return null;
  }

  try {
    let user = auth.currentUser
    onAuthStateChanged(auth, (user) => user)
    return user;
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request) {
  signOut(auth);
  let session = await storage.getSession(
    request.headers.get("Cookie")
  );
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

export async function createUserSession(
  userId: string | null,
  redirectTo: string
) {
  let session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}