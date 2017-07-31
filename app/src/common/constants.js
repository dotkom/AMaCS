


export const OAUTH_SETTINGS = {
  authority: "http://localhost:8000",
  client_id: "WTqkIUTRzscCqifWjGvouwXTSO8N0pn7C1wQMwh6",
  response_type: "token",
  redirect_uri: "http://localhost:8080/auth",
  scope: "authentication.onlineuser.username.read authentication.onlineuser.first_name.read authentication.onlineuser.last_name.read authentication.onlineuser.email.read authentication.onlineuser.is_member.read authentication.onlineuser.field_of_study.read authentication.onlineuser.nickname.read authentication.onlineuser.rfid.read",
  filterProtocolClaims: false,
  metadata: {
    authorization_endpoint: "http://localhost:8000/sso/o/authorize/",
    userinfo_endpoint: "http://localhost:8000/sso/user/",
    end_session_endpoint: "http://localhost:8000/sso/o/revoke/"
  }
}
