import { supabaseClient } from "@/src/utils/supabase/client";

export class TokenService {
  static _session = supabaseClient.auth.getSession();

  static async refreshSession() {
    if (this._session != null) {
      await supabaseClient.auth.refreshSession();
    }
  }
}
