# ===============================================================================================
# RUNTIME STAGE (Tối ưu cho High-load, K8s Auto-scaling & DevSecOps)
# Base: Eclipse Temurin JRE trên Ubuntu Jammy (Glibc) nhưng bản slim để giảm size.
# ===============================================================================================

# Khai báo Base Image.
FROM eclipse-temurin:17-jre-jammy

# Gắn Metadata cho image.
LABEL maintainer="Alkaid Team" service="core-api" tier="backend"

# Đồng bộ thời gian hệ thống.
ENV TZ=UTC

# Tăng cường bảo mật (DevSecOps).
RUN addgroup --system spring && adduser --system --ingroup spring spring

# Khai báo thư mục làm việc mặc định.
WORKDIR /app

# Đưa file thực thi vào container.
COPY --chown=spring:spring target/*.jar app.jar

# Áp dụng user an toàn.
USER spring:spring

# Tối ưu cấu hình máy ảo Java (JVM) cho K8s.
ENV JDK_JAVA_OPTIONS="-XX:MaxRAMPercentage=75.0 \
                      -XX:+UseG1GC \
                      -XshowSettings:vm \
                      -Djava.security.egd=file:/dev/./urandom \
                      -Djava.net.preferIPv4Stack=true"

# Khởi tạo sẵn biến môi trường cho các công cụ giám sát (APM/Observability).
ENV JAVA_TOOL_OPTIONS=""

# Khai báo port giao tiếp.
EXPOSE 8088

# Khởi chạy ứng dụng với chuẩn PID 1.
ENTRYPOINT ["java", "-jar", "app.jar"]
