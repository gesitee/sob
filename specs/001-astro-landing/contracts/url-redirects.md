# External URL Contracts

## WhatsApp Redirects
The application generates WhatsApp API URLs for ordering.

### Format
`https://wa.me/{phone_number}?text={url_encoded_message}`

### Constants
- `phone_number`: defined in `src/config/site.ts` (e.g., `62895804069320`)

### Usage Scenarios
1. **Direct Contact**: Simple predefined text (e.g., "Halo SOB, saya mau pesan")
2. **Category Selection**: Appends category name (e.g., "Halo SOB, saya mau pesan Sayur Segar")
3. **Promo Form**: Submits formatted lead details.
   ```text
   Halo SOB, saya tertarik dengan promo.
   Nama: [Name]
   No HP: [Phone]
   Area: [Area]
   ```
