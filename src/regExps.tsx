export const emailExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const passwordExp =
  /(?=.*\d{1,50})(?=.*[~`!@#$%&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;

export const usernameExp = /^[0-9a-z._]{6,12}$/;

export const hastagExp = /#[\w]+/g;
